export type Products = {
  id: number;
  name: string;
  price: number;
};

export type Order = {
  id: number;
  products: Products[];
  credit_card_number: string;
};
