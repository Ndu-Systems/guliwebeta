import { SelectService } from './../../shared/select.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/Article';
import { ShoppingCart } from '../../models/Shopping-Cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public articles : Observable<Article[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;

  private cartSubscription: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private selectService: SelectService
  ) { }

  ngOnInit() {
  }

}
