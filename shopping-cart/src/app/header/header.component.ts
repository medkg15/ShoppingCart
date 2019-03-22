import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private cart: Cart) { }

  ngOnInit() {
  }

  cartCount(): number{
    return this.cart.count();
  }

}
