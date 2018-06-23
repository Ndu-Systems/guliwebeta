import { CartItem } from "src/app/models/Cart-Item";

export class ShoppingCart {
    public items:CartItem[] = new Array<CartItem>();
    public Total: number = 0;
    public itemsTotal: number = 0;

    public updateCart(src: ShoppingCart){
        this.items = src.items;
        this.Total = src.Total;
        this.itemsTotal = src.itemsTotal;
    }
}
