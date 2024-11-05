import { CartEntity } from "@/@core/domain/entities/cart.entity";

export interface CartGateway {
  get(): CartEntity;
  save(cart: CartEntity): void;
}
