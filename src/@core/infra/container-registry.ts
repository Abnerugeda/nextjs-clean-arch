import { Container } from "inversify";
import { http } from "./http";
import { ProductHttpGateway } from "./gateways/product-http.gateway";
import { ListProductsUseCase } from "../application/product/list-products.use-case";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),
  ProductGateway: Symbol.for("ProductGateway"),
  ListProductsUseCase: Symbol.for("ListProductsUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.ProductGateway).toDynamicValue((context) => {
  return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter));
});

container.bind(Registry.ListProductsUseCase).toDynamicValue((context) => {
  return new ListProductsUseCase(
    context.container.get(Registry.ProductGateway)
  );
});