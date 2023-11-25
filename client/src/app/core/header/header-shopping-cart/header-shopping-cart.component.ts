import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CART } from '../../../shared/constants/header/icon';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-header-shopping-cart',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent],
  templateUrl: './header-shopping-cart.component.html',
  styleUrl: './header-shopping-cart.component.scss'
})
export class HeaderShoppingCartComponent {
  public cart: string = CART;

  public count: number | string = '0';

  public statusShoppingCart: boolean = false;

  public openShoppingCart(): void {
    this.statusShoppingCart = !this.statusShoppingCart 
  }
}
