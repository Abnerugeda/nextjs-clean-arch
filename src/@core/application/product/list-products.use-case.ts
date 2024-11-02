import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class ListProductsUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(): Promise<ProductEntity[]> {
    return await this.productGateway.findAll();
  }
}
