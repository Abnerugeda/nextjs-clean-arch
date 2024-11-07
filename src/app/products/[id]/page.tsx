import { ProductDetail } from "./components/ProductDetail";
import { container, Registry } from "@/@core/infra/registry/container-registry";
import { GetProductUseCase } from "@/@core/application/product/get-product.use-case";
import { ProductEntity } from "@/@core/domain/entities/product.entity";

interface Params {
  id: number;
}

interface PageProps {
  params: Params;
}

const ProductPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const useCase = container.get<GetProductUseCase>(Registry.GetProductUseCase);

  const product: ProductEntity = await useCase.execute(id);

  return <ProductDetail product={product.props} />;
};
export default ProductPage;
