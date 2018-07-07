import { UserDataService } from './../../shared/user-data.service';
import { ArticleService } from './../../article/article.service';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/Shopping-Cart';
import { ICartItemWithProduct } from '../../interfaces/ICartItemWithProduct';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/Article';
import { CurrencyService } from '../../shared/currency.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { WEB_HOST } from '../../shared/config';

@Component({
  selector: 'app-pay-fast',
  templateUrl: './pay-fast.component.html',
  styleUrls: ['./pay-fast.component.css']
})
export class PayFastComponent implements OnInit {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  private articles: Article[];
  purchases: any[] = [];
  private cartSubscription: Subscription;
  web = WEB_HOST;
  itemCount: number
  user: User;

  //PayFast requisite 
  amount: number
  firstName: any
  lastName: any
  emailAddress: any
  rate: number

  constructor(
    private shoppingCartService: ShoppingCartService,
    private articleService: ArticleService,
    private currencyService: CurrencyService,
    private router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.GetUser();
    this.GetCurrency();
    //Get Shopping Cart 
    this.cart = this.shoppingCartService.get();
    if (this.cart) {
      this.cartSubscription = this.cart.subscribe((cart) => {
        this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
        this.articleService.getAllArticles().subscribe((articles) => {
          this.articles = articles.data;
          this.cartItems = cart.items
            .map((item) => {
              const article = this.articles.find((a) => a.ArticleId === item.ArticleId);
              return {
                ...item,
                article,
                totalCost: article.Price * item.quantity
              };
            });
          this.amount = (cart.Total * this.rate);
        });
      });
    }
    else{
      this.shoppingCartService.empty();
    }



  }
  GetUser(): any {
    this.user = this.userDataService.getUser();
    if (this.user) {
      this.emailAddress = this.user.Email;
      this.firstName = this.user.FirstName;
      this.lastName = this.user.Surname;
    }
    else {
      this.router.navigate(['un-authorized']);
      this.cart = null;
    }
  }

  GetCurrency(): any {
    this.currencyService.GetCurrency()
      .subscribe(response => {
        if (response) {
          this.rate = Number(JSON.stringify(response["quotes"]["USDZAR"]));
        }
        else {
          alert("Please Try Again");
        }
      })
  }
   

  Save() {
    debugger
    this.cartItems.forEach(item => {
      let data = {
        ArticleId: item.ArticleId,
        UserId: this.user.UserId
      }
      this.articleService.addArticlePurchase(data).subscribe(response => {
        if (response === "1") {
          console.log("Purchase Successful!")
          let data = {
            ArticleId: item.ArticleId
          }
          this.articleService.updateDownload(data).subscribe(response =>{
            if(response === "1")
              console.log("download updated");
              this.cart = null;
              this.cartSubscription = null;
          });
        }
        else {
          console.log(response);
        }
      });
    });
  }

}
