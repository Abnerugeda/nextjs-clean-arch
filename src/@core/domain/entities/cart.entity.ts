import { ProductEntity } from "./product.entity";

export type CartProps = {
  products: ProductEntity[];
};

export class CartEntity {
  constructor(public props: CartProps) {}

  addProduct(product: ProductEntity) {
    this.props.products.push(product);
  }

  removeProduct(productId: number) {
    this.props.products.filter((product) => product.id !== productId);
  }
  clear() {
    this.props.products = [];
  }

  get total() {
    return this.props.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  get product() {
    return this.props.products;
  }
}
