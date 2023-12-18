import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CART } from '../../../shared/constants/header/icon';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { Product } from '../../../shared/interface/product';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { PopupService } from '../../../shared/services/popup.service';

@Component({
  selector: 'app-header-shopping-cart',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent],
  templateUrl: './header-shopping-cart.component.html',
  styleUrl: './header-shopping-cart.component.scss'
})
export class HeaderShoppingCartComponent {
  public cart: string = CART;
  public statusShoppingCart: boolean = false;
  public isOpen!: boolean;

  public count: number | string = '0';

  public cartItem: Product[] = [];
  public localItem!: string | null

  public constructor(
   private productPageService : ProductPageService,
   private popupService: PopupService
  ) {}

  public ngOnInit(): void {
    this.popupService.statusPopup$.subscribe((value) => {
      this.isOpen = value
    })

    if(typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('cart')
      if(this.localItem !== null) {
        this.cartItem = JSON.parse(this.localItem)
      }
    }

    this.productPageService.cartCount$.subscribe((value) => {
      if(value) {
        this.count = value
      } else {
        this.count = this.cartItem.length
      }
    })

    this.productPageService.updateCountCart()
  }

  public openShoppingCart(): void {
    this.statusShoppingCart = true
    let num = 0
    console.log(num);
    num++
    this.popupService.togglePopup(this.statusShoppingCart)
  }
}
