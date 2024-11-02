import { Products } from "@/utils/models";
import { ProductDetail } from "./components/ProductDetail";

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

const ProductPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const product: Products = await fetch(
    `http://localhost:8000/products/${id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return <ProductDetail product={product} />;
};
export default ProductPage;
