import { MyCart } from "@/components/my-cart";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; 
}

const ProductsLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MyCart />
      {children}
    </>
  );
};

export default ProductsLayout;
