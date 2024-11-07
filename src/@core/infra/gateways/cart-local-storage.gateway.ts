import { CartEntity } from "@/@core/domain/entities/cart.entity";
import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";
import { injectable } from "inversify";

@injectable()
export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  get(): CartEntity {
    const products = JSON.parse(localStorage.getItem(this.CART_KEY) || "[]");
    return new CartEntity({
      products: products.map(
        (p: any) =>
          new ProductEntity({
            ...p,
          })
      ),
    });
  }

  save(cart: CartEntity): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.product));
  }
}
