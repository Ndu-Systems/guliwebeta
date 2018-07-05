import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.css']
})
export class UnAuthorizedComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.empty(); 
  }

}
