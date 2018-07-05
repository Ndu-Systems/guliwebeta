import { UserDataService } from './../../shared/user-data.service';
import { ViewArticleService } from './view-article.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { Article } from '../../models/Article';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  ArticleId: number;
  article: any;
  user: any;
  name: any;
  message: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewArticleService: ViewArticleService,
    private shoppingCartService: ShoppingCartService,
    private userDataService : UserDataService
  ) { }

  ngOnInit() {
    this.GetUser();
    this.ArticleId = parseInt(this.route.snapshot.paramMap.get("ArticleId"));
    this.ViewArticle(this.ArticleId);
  }
  GetUser(): any {
    this.user = this.userDataService.getUser();
    if(this.user){
      console.log("user logged in");
    }
    else{
      console.log("insecure connection");
    }
  }
  ViewArticle(ArticleId) {
 
    this.viewArticleService.viewArticle(ArticleId)
      .subscribe(response => {
        if (response) {
          this.article = response.Articles[0];
        }
        else {
          this.message = "No Article Found";
        }
      })
  }

  TopPaid() {
    this.router.navigate(['/top-paid']);
  }

  public addArticleToCart(article: Article) {
    this.shoppingCartService.addItem(article, 1);
  }

  public removeArticleFromCart(article: Article){
    this.shoppingCartService.addItem(article,-1);
  }

  public articleInCart(article: Article): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.ArticleId === article.ArticleId));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }
}
