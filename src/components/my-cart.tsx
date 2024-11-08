'use client'
import { CartContext } from "@/context/cart.provider";
import { useContext } from "react";

export const MyCart = () => {
  const cartContext = useContext(CartContext);

  return (
    <nav>
      Carrinho - Total {cartContext.cart.total} | Itens {cartContext.cart.product.length}
    </nav>
  );
};

