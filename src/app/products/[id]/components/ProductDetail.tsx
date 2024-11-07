"use client";
import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { CartContext } from "@/context/cart.provider";
import { useContext } from "react";

export const ProductDetail = ({ product }: { product: ProductEntity }) => {
  const productEntity = new ProductEntity(product);

  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addProduct(productEntity);
    }
  };

  return (
    <div>
      <h3>{productEntity.name}</h3>
      <label>Preço</label> {productEntity.price}
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};
