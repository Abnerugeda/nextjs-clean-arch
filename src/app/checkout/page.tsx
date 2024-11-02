"use client";

import { CartContext } from "@/context/cart.provider";
import { useRouter } from "next/navigation";
import React, { FormEvent, useContext } from "react";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const credit_card_number = event.currentTarget.credit_card_number.value;
    const response = await fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cartContext.products,
        credit_card_number,
      }),
    });

    if (response.ok) {
      const data = response.json();
      router.push(`checkout/${data.id}/success`);
    }
  }

  return (
    <div>
      <h3>Meu carrinho</h3>
      <ul>
        {cartContext.products.map((products, key) => (
          <li key={key}>
            Produto {products.name} - {products.price}
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="credit_card_number">Cartão de crédito </label>
          <input
            type="text"
            name="credit_card_number"
            id="credit_card_number"
          />
        </div>
        <div>
          <button type="submit">COmprar</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
