import { Products } from "@/utils/models";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = async () => {
  const data: Products[] = await fetch("http://localhost:8000/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div>
      <h1>Ecommerce Clean Arch</h1>
      <ul>
        {data.map((product, key) => {
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
