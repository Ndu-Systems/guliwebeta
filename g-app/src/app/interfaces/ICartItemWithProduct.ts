import { CartItem } from 'src/app/models/cart-item';
import { Article } from 'src/app/models/Article';
export interface ICartItemWithProduct extends CartItem {
    article: Article;
    totalCost: number;
}