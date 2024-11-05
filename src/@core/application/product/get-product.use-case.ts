import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class GetProductUseCase {
  constructor(private productGateway: ProductGateway) {}

  execute(id: number): Promise<ProductEntity> {
    return this.productGateway.findById(id);
  }
}
