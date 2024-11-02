import { Order } from "@/utils/models";
import React from "react";

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

const SuccessPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:8000/orders/${id}`);

  if (!data.ok) return;

  const order: Order = await data.json();

  return (
    <div>
      <h3>Parabéns sua compra {order.id} foi efetivada </h3>
      <ul>
        {order.products.map((product, key) => (
          <li key={key}>
            Produto {product.name} - {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessPage;
