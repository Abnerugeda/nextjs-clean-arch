/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { AddProductInCartUseCase } from "@/@core/application/cart/add-product-in-cart.use-case";
import { ClearCartUseCase } from "@/@core/application/cart/clear-product-in-cart.use-case";
import { RemoveProductInCartUseCase } from "@/@core/application/cart/remove-product-in-cart.use-case";
import { CartEntity } from "@/@core/domain/entities/cart.entity";
import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { container, Registry } from "@/@core/infra/registry/container-registry";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

export type CartContextType = {
  cart: CartEntity;
  addProduct: (product: ProductEntity) => void;
  removeProduct: (product: number) => void;
  clear: () => void;
};

const defaultContext: CartContextType = {
  addProduct: (product: ProductEntity) => {},
  removeProduct: (productId: number) => {},
  clear: () => {},
  cart: new CartEntity({products: []}),
};

export const CartContext = createContext(defaultContext);

const addProductUseCase = container.get<AddProductInCartUseCase>(Registry.AddProductInCartUseCase);
const removeProductUseCase = container.get<RemoveProductInCartUseCase>(Registry.RemoveProductInCartUseCase);
const clearProductUseCase = container.get<ClearCartUseCase>(Registry.ClearCartUseCase);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartEntity>(defaultContext.cart);

  const  addProduct = useCallback( async (product: ProductEntity) => {
    const cart = await addProductUseCase.execute(product);
    setCart(cart);
  }, []);

  const removeProduct = useCallback((productId: number) => {
    const cart = removeProductUseCase.execute(productId);
    setCart(cart);
  }, []);

  const clear = useCallback(() => {
    const cart = clearProductUseCase.execute();
    setCart(cart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
