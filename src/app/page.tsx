import { ListProductsUseCase } from "@/@core/application/product/list-products.use-case";
import { container, Registry } from "@/@core/infra/registry/container-registry";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = async () => {
  const useCase = container.get<ListProductsUseCase>(
    Registry.ListProductsUseCase
  );
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
