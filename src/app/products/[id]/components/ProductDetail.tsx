"use client";
import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { CartContext } from "@/context/cart.provider";
import { useContext } from "react";

export const ProductDetail = ({ product }: { product: ProductEntity }) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addProduct(product);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <label>Preço</label> {product.price}
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};
