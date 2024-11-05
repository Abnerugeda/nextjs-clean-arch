import { ProductProps } from "@/@core/domain/entities/product.entity";


export type Order = {
  id: number;
  products: ProductProps[];
  credit_card_number: string;
};
