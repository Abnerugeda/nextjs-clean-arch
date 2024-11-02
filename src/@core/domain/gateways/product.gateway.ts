import { ProductEntity } from "../entities/product.entity";

export interface ProductGateway {
  findAll(): Promise<ProductEntity[]>;
  findById(id: number): Promise<ProductEntity>;
}
