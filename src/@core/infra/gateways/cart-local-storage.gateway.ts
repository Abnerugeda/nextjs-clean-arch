import { CartEntity } from "@/@core/domain/entities/cart.entity";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  get(): CartEntity {
    const products = JSON.parse(localStorage.getItem(this.CART_KEY) || "[]");
    return new CartEntity({ products });
  }

  save(cart: CartEntity): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.product));
  }
}
