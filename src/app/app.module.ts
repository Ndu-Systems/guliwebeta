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
 

@NgModule({
  declarations: [
    AppComponent,
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
    ViewArticleService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
