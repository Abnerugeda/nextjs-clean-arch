import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class RemoveProductInCartUseCase{
    constructor(private cartGateway: CartGateway){}

    execute(productId: number){
        const cart = this.cartGateway.get();
        cart.removeProduct(productId);
        this.cartGateway.save(cart);
        return cart
    }
}