import { CartEntity } from "@/@core/domain/entities/cart.entity";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class GetCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  async execute(): Promise<CartEntity> {
    return this.cartGateway.get();
  }
}
