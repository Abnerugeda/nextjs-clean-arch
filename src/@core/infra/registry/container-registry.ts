import { Container } from "inversify";
import { http } from "../http";
import { ProductHttpGateway } from "../gateways/product-http.gateway";
import { ListProductsUseCase } from "../../application/product/list-products.use-case";
import { GetProductUseCase } from "../../application/product/get-product.use-case";
import { CartLocalStorageGateway } from "../gateways/cart-local-storage.gateway";
import { GetCartUseCase } from "../../application/cart/get-cart.use-case";
import { AddProductInCartUseCase } from "@/@core/application/cart/add-product-in-cart.use-case";
import { ClearCartUseCase } from "@/@core/application/cart/clear-product-in-cart.use-case";
import { RemoveProductInCartUseCase } from "@/@core/application/cart/remove-product-in-cart.use-case";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),
  ProductGateway: Symbol.for("ProductGateway"),
  CartGateway: Symbol.for("CartGateway"),

  ListProductsUseCase: Symbol.for("ListProductsUseCase"),
  GetProductUseCase: Symbol.for("GetProductUseCase"),
  GetCartUseCase: Symbol.for("GetCartUseCase"),
  AddProductInCartUseCase: Symbol.for("AddProductInCartUseCase"),
  ClearCartUseCase: Symbol.for("ClearCartUseCase"),
  RemoveProductInCartUseCase: Symbol.for("RemoveProductInCartUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.ProductGateway).toDynamicValue((context) => {
  return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter));
});

container.bind(Registry.CartGateway).to(CartLocalStorageGateway);

container.bind(Registry.ListProductsUseCase).toDynamicValue((context) => {
  return new ListProductsUseCase(
    context.container.get(Registry.ProductGateway)
  );
});

container.bind(Registry.GetProductUseCase).toDynamicValue((context) => {
  return new GetProductUseCase(context.container.get(Registry.ProductGateway));
});

container.bind(Registry.GetCartUseCase).toDynamicValue((context) => {
  return new GetCartUseCase(context.container.get(Registry.CartGateway));
});


container.bind(Registry.AddProductInCartUseCase).toDynamicValue((context) => {
  return new AddProductInCartUseCase(context.container.get(Registry.CartGateway));
});


container.bind(Registry.RemoveProductInCartUseCase).toDynamicValue((context) => {
  return new RemoveProductInCartUseCase(context.container.get(Registry.CartGateway));
});

container.bind(Registry.ClearCartUseCase).toDynamicValue((context) => {
  return new ClearCartUseCase(context.container.get(Registry.CartGateway));
});
