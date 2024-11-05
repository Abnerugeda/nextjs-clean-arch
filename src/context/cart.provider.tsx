"use client";
import { ProductEntity } from "@/@core/domain/entities/product.entity";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartContextType = {
  products: ProductEntity[];
  addProduct: (product: ProductEntity) => void;
  removeProduct: (product: ProductEntity) => void;
  clear: () => void;
  total: number;
};

const defaultContext: CartContextType = {
  addProduct: () => {},
  removeProduct: () => {},
  clear: () => {},
  products: [],
  total: 0,
};

export const CartContext = createContext(defaultContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductEntity[] | null>(null);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
  }, []);

  useEffect(() => {
    if (!products) return;
    
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = useCallback((product: ProductEntity) => {
    setProducts((products) => [...products!, product]);
  }, []);

  const removeProduct = useCallback((product: ProductEntity) => {
    setProducts((products) => products!.filter((p) => p.id !== product.id));
  }, []);

  const clear = useCallback(() => {
    setProducts([]);
  }, []);

  const total = useMemo(
    () => products?.reduce((acc, product) => acc + product.price, 0),
    [products]
  );

  return (
    <CartContext.Provider
      value={{
        products: products || [],
        addProduct,
        removeProduct,
        clear,
        total: total || 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
