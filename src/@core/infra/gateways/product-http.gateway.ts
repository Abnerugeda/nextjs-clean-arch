import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";
import { AxiosInstance } from "axios";

export class ProductHttpGateway implements ProductGateway {
  constructor(private http: AxiosInstance) {}

  async findAll(): Promise<ProductEntity[]> {
    return await this.http.get<ProductEntity[]>("/products").then((res) =>
      res.data.map(
        (product) =>
          new ProductEntity({
            id: product.id,
            description: product.description,
            name: product.name,
            price: product.price,
          })
      )
    );
  }

  async findById(id: number): Promise<ProductEntity> {
    return await this.http.get<ProductEntity>(`/products/${id}`).then(
      (res) =>
        new ProductEntity({
          id: res.data.id,
          description: res.data.description,
          name: res.data.name,
          price: res.data.price,
        })
    );
  }
}
