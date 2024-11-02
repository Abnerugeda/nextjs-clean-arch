import { ListProductsUseCase } from "@/@core/application/product/list-products.use-case";
import { ProductHttpGateway } from "@/@core/infra/gateways/product-http.gateway";
import { http } from "@/utils/http";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = async () => {
  const gateway = new ProductHttpGateway(http);
  const useCase = new ListProductsUseCase(gateway);
  const products = await useCase.execute();

  return (
    <div>
      <h1>Ecommerce Clean Arch</h1>
      <ul>
        {products.map((product, key) => {
          return (
            <li key={key}>
              <label>
                {product.name} |{" "}
                <Link href={`/products/${product.id}`}>Ver</Link>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
