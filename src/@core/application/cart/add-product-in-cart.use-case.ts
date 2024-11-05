import { ProductEntity } from "@/@core/domain/entities/product.entity";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class AddProductInCartUseCase{
    constructor(private cartGateway: CartGateway){}

    async execute(product: ProductEntity){
        const cart = this.cartGateway.get();
        cart.addProduct(product);
        this.cartGateway.save(cart);
    }
}