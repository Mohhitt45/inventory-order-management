from langchain_core.tools import tool
from app.database import SessionLocal
from app.models import Product
from app.models import Product, Order



@tool
def get_low_stock_products(limit: int = 5):
    """
    Get products where stock quantity is below the given limit.
    """

    db = SessionLocal()

    try:
        products = db.query(Product).filter(
            Product.stock_quantity < limit
        ).all()

        if not products:
            return {
                "message": "No low stock products found.",
                "products": []
            }

        return {
            "message": f"Found {len(products)} low stock products.",
            "products": [
                {
                    "name": p.name,
                    "sku": p.sku,
                    "stock_quantity": p.stock_quantity,
                    "price": p.price
                }
                for p in products
            ]
        }

    finally:
        db.close()



@tool
def search_product(product_name: str):
    """
    Search products by product name.
    """

    db = SessionLocal()

    try:
        products = db.query(Product).filter(
            Product.name.ilike(f"%{product_name}%")
        ).all()

        if not products:
            return {
                "message": f"No product found for '{product_name}'.",
                "products": []
            }

        return {
            "message": f"Found {len(products)} product(s).",
            "products": [
                {
                    "name": p.name,
                    "sku": p.sku,
                    "stock_quantity": p.stock_quantity,
                    "price": p.price
                }
                for p in products
            ]
        }

    finally:
        db.close()



@tool
def create_order(product_name: str, quantity: int):
    """
    Create an order for a product and update inventory stock.
    """

    db = SessionLocal()

    try:

        product = db.query(Product).filter(
            Product.name.ilike(f"%{product_name}%")
        ).first()


        if not product:
            return {
                "message": f"Product '{product_name}' not found."
            }


        if product.stock_quantity < quantity:
            return {
                "message": (
                    f"Insufficient stock. "
                    f"Available quantity: {product.stock_quantity}"
                )
            }


        total_price = product.price * quantity


        order = Order(
            product_id=product.id,
            quantity=quantity,
            total_price=total_price,
            status="CREATED"
        )


        product.stock_quantity -= quantity


        db.add(order)

        db.commit()
        db.refresh(order)


        return {
            "message": "Order created successfully.",
            "order_id": order.id,
            "product": product.name,
            "quantity": quantity,
            "total_price": total_price,
            "remaining_stock": product.stock_quantity
        }


    except Exception as e:
        db.rollback()

        return {
            "message": "Order creation failed.",
            "error": str(e)
        }


    finally:
        db.close()



@tool
def get_order_history():
    """
    Get all created orders with product details.
    """

    db = SessionLocal()

    try:

        orders = db.query(Order).all()

        if not orders:
            return {
                "message": "No orders found.",
                "orders": []
            }


        history = []

        for order in orders:

            product = db.query(Product).filter(
                Product.id == order.product_id
            ).first()


            history.append(
                {
                    "order_id": order.id,
                    "product": product.name if product else "Unknown",
                    "quantity": order.quantity,
                    "total_price": order.total_price,
                    "status": order.status,
                    "created_at": order.created_at
                }
            )


        return {
            "message": f"Found {len(history)} orders.",
            "orders": history
        }


    finally:
        db.close()



@tool
def update_order_status(order_id: int, status: str):
    """
    Update status of an existing order.
    """

    db = SessionLocal()

    try:

        order = db.query(Order).filter(
            Order.id == order_id
        ).first()


        if not order:
            return {
                "message": f"Order {order_id} not found."
            }


        order.status = status.upper()

        db.commit()
        db.refresh(order)


        return {
            "message": "Order status updated successfully.",
            "order_id": order.id,
            "new_status": order.status
        }


    finally:
        db.close()



@tool
def cancel_order(order_id: int):
    """
    Cancel an order and restore inventory stock.
    """

    db = SessionLocal()

    try:

        order = db.query(Order).filter(
            Order.id == order_id
        ).first()


        if not order:
            return {
                "message": f"Order {order_id} not found."
            }


        if order.status == "CANCELLED":
            return {
                "message": "Order already cancelled."
            }


        product = db.query(Product).filter(
            Product.id == order.product_id
        ).first()


        if product:
            product.stock_quantity += order.quantity


        order.status = "CANCELLED"


        db.commit()


        return {
            "message": "Order cancelled successfully.",
            "order_id": order.id,
            "restored_quantity": order.quantity,
            "product": product.name
        }


    except Exception as e:
        db.rollback()

        return {
            "message": "Cancellation failed.",
            "error": str(e)
        }


    finally:
        db.close()