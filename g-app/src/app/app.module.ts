import { ArticleService } from './article/article.service';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { AppRoutingModule, routingComponents } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SelectService } from './shared/select.service';
import { UserAccountService } from './account/user-account.service';
import { ViewArticleService } from './article/view-article/view-article.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ForgotPasswordService } from './account/forgot-password/forgot-password.service';
import { EmailService } from './shared/email.service';
import { LocalStorageService, StorageService } from './shared/storage.service';
import { UserPipePipe } from './shared/pipes/user-pipe.pipe';
import { ArticlePipePipe } from './shared/pipes/article-pipe.pipe';
 

@NgModule({
  declarations: [
    AppComponent,
    UserPipePipe,
    ArticlePipePipe,
    routingComponents 
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule
  ],
  providers: [
    SelectService,
    UserAccountService,
    LocalStorageService,
    ViewArticleService,
    {provide: StorageService, useClass: LocalStorageService},
    {
      deps: [StorageService, ArticleService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    },
    ForgotPasswordService,
    ArticleService,
    EmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
