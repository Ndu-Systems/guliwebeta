import { UserDataService } from './../../shared/user-data.service';
import { EmailService } from './../../shared/email.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { ArticleService } from './../../article/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from '../../models/Shopping-Cart';
import { Observable, Subscription } from 'rxjs';
import { ICartItemWithProduct } from '../../interfaces/ICartItemWithProduct';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  user: any;
  private articles: Article[];
  private cartSubscription: Subscription;

  constructor(
    private articleService : ArticleService,
    private shoppingCartService : ShoppingCartService, 
    private emailService : EmailService,
    private router : Router ,
    private userDataService : UserDataService
  ) { }

  ngOnInit() { 
   this.GetUser();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.articleService.getAllArticles().subscribe((articles) => {
        this.articles = articles.data;
        this.cartItems = cart.items
          .map((item) => {
            console.log(this.articles);
            const article = this.articles.find((a) => a.ArticleId === item.ArticleId);
            return {
              ...item,
              article,
              totalCost: article.Price * item.quantity
            };
          });
      });
    });
  }
  GetUser(): any {
    this.user = this.userDataService.getUser();
    if(this.user){
      console.log("user logged in");
    }
    else{
     this.router.navigate(['un-authorized']);
    }
  }
  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  //Direct Deposit
  bank = 'FNB';
  bankBranch = '500';
  bankAccount = '123456789';
  name = 'Freedom';
  directDeposit() {
    let email = {
      email: 'freedom.khanyile1@gmail.com',
      subject: 'Direct Deposit - Request',
      message: `Hi ${this.name} <br/>
                     Cogratulations on your latest purchase on Guliwe Publications <br/>
                     We hope that our service was a good experience<br/>
                     Please Find below bank details for your direct deposit:<br/>
                     <table>
                     <tr>
                     <td>Bank Name: </td>                    
                     <td>${this.bank}</td>
                     </tr>    
                     <tr>
                     <td>Branch Code: </td>                    
                     <td>${this.bankBranch}</td>
                     </tr>
                     <tr>
                     <td>Bank Account Number: </td>                    
                     <td>${this.bankAccount}</td>
                     </tr>                
                     </table><br/>
                     We hope you find this a Good Read... Visit us Again
                     `
    }

    this.emailService.sendEmail(email).subscribe((data) => {
      if (data === 1) {
        // alert("");
        this.router.navigate(['direct-deposit-success']);
      }
      else {
        alert(data);
      }
    })
  }

}
