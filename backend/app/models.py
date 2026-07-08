from datetime import datetime

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    sku = Column(
        String,
        unique=True,
        nullable=False
    )

    price = Column(
        Float,
        nullable=False
    )

    stock_quantity = Column(
        Integer,
        nullable=False
    )


class Order(Base):
    __tablename__ = "orders"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    product_id = Column(
        Integer,
        ForeignKey("products.id"),
        nullable=False
    )

    quantity = Column(
        Integer,
        nullable=False
    )

    total_price = Column(
        Float,
        nullable=False
    )

    status = Column(
        String,
        default="CREATED"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )