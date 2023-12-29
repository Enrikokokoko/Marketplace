import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CART } from '../../../shared/constants/header/icon';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { Product } from '../../../shared/interface/product';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { PopupService } from '../../../shared/services/popup.service';
import { ProductQuantities } from '../../../shared/interface/quantity';

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
  public localQuantity!: string | null
  public itemQuantity: ProductQuantities = {}

  public constructor(
   private productPageService : ProductPageService,
   private popupService: PopupService
  ) {}

  public ngOnInit(): void {
    this.popupService.statusPopup$.subscribe((value) => {
      this.isOpen = value
    })

    this.productPageService.quantityCount$.subscribe((value) => {
      if(value) {
        let sum = 0
        for(let key in value) {
          sum += value[key]
        }
        this.count = sum
      } else {
        if(typeof localStorage !== 'undefined') {
          this.localQuantity = localStorage.getItem('productQuantity')

          if(this.localQuantity !== null) {
            this.itemQuantity = JSON.parse(this.localQuantity)
          }
        }

        let sum = 0
        for(let key in this.itemQuantity) {
          sum += value[key]
        }
        this.count = sum
      }
    })

    this.productPageService.displayItemQuantity()
    this.productPageService.updateCountCart()
  }

  public openShoppingCart(): void {
    this.statusShoppingCart = true
    let num = 0
    num++
    this.popupService.togglePopup(this.statusShoppingCart)
  }
}
