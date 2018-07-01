import { ArticleService } from './../article/article.service'; 
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/Shopping-Cart';
import { Observable, Observer } from 'rxjs';
import { Article } from '../models/Article';
import { CartItem } from '../models/Cart-Item';
import { StorageService } from '../shared/storage.service';

const CART_KEY = "cart";

@Injectable()

export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers : Array<Observer<ShoppingCart>> =new Array<Observer<ShoppingCart>>();
  private articles : Article[];

    public constructor(
      private storageService : StorageService,
      private articleService : ArticleService
    ) { 
      this.storage = this.storageService.get();
      this.articleService.getAllArticles().subscribe((articles)=> this.articles = articles.data);
      this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>)=> {
        this.subscribers.push(observer);
        observer.next(this.retrieve());
        return () => {
          this.subscribers = this.subscribers.filter((obs)=> obs!== observer);
        };
      });
    }

    //Return Shopping Cart
    public get(): Observable<ShoppingCart>{
      return this.subscriptionObservable;
    }

    //Add Item to shopping cart
    public addItem(article: Article, quantity: number): void{
      const cart = this.retrieve();
      let item = undefined;
      if(cart.items.length !== 0){
        item  = cart.items.find((p)=> p.ArticleId === article.ArticleId);
      } 
      
      if(item === undefined){
        item = new CartItem();
        item.ArticleId = article.ArticleId;
        cart.items.push(item);
      }

      item.quantity += quantity;
      cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);    

      this.calculateCart(cart);
      this.save(cart);
      this.dispatch(cart);
    }
    //calculate Cart Total Payable for Articles added in the cart
    private calculateCart(cart : ShoppingCart): void {
      
      cart.itemsTotal = cart.items
            .map((item) => item.quantity * this.articles.find((p) => p.ArticleId === item.ArticleId).Price)
            // .map((item)=> item.quantity * 40)
            .reduce((previous, current) => previous + current, 0);    
      
      cart.Total = cart.itemsTotal;
    }

    //Save Functionality to be saved locally as temp not Database incase they change their minds
    private save(cart: ShoppingCart): void {
      this.storage.setItem(CART_KEY, JSON.stringify(cart));
    }

    private dispatch(cart: ShoppingCart): void{
      this.subscribers
      .forEach((sub)=>{
        try{
          sub.next(cart);
        }
        catch(e){
             // we want all subscribers to get the update even if one errors.
        }
      });
    }

    //Retriev cart ittems stored locally
    private retrieve(): ShoppingCart{
      const cart = new ShoppingCart();
      const storedCart = this.storage.getItem(CART_KEY);
      if(storedCart){
        cart.updateCart(JSON.parse(storedCart));
      }
      return cart;
    }

    //Empty the Cart
    public empty(): void{
      const emptyCart = new ShoppingCart();
      this.save(emptyCart);
      this.dispatch(emptyCart);
    }    
}
