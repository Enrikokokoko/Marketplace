import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/interface/product';
import { BLACK_CROSS, CROSS, DOTS, EMPTY_CART, MINUS, PLUS } from '../../shared/constants/product-page/product-img';
import { ProductPageService } from '../../shared/services/product-page.service';
import { Subject } from 'rxjs';
import { PopupService } from '../../shared/services/popup.service';
import { CounterComponent } from './counter/counter.component';
import { ProductQuantities } from '../../shared/interface/quantity';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, CounterComponent, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  public plus = PLUS
  public minus = MINUS
  public cross = CROSS
  public blackCross = BLACK_CROSS
  public dots = DOTS
  public emptyCart = EMPTY_CART 
  private destroy$: Subject<void> = new Subject()

  public quantity: number = 0;
  public cartItem: Product[] = [];
  public items: Product[] = [];
  public localItem!: string | null
  public localQuantity!: string | null
  public itemQuantity: ProductQuantities = {}
  public totalPrice: number = 0

  public constructor(private productPageService: ProductPageService, private popupService: PopupService, private authService: AuthService) {

  }

  public ngOnInit(): void {
    if(typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('cart')
      this.localQuantity = localStorage.getItem('productQuantity')
      if(this.localItem !== null) {
        this.cartItem = JSON.parse(this.localItem)
      }
      if(this.localQuantity !== null) {
        this.itemQuantity = JSON.parse(this.localQuantity)
      }
    }
    this.productPageService.quantityCount$.subscribe((value) => {
      if(value) {
        this.itemQuantity = value
        this.itemPrice();
      } else {
        if(typeof localStorage !== 'undefined') {
          this.localQuantity = localStorage.getItem('productQuantity')

          if(this.localQuantity !== null) {
            this.itemQuantity = JSON.parse(this.localQuantity)
          }
        }
      }
    }
    )
    this.productPageService.cartItem$.subscribe((value) => {
      if(value) {
        this.cartItem = value 
        this.itemPrice();
      }
    })
    this.itemPrice();

    this.productPageService.displayItemQuantity()
    this.productPageService.displayCartItem()
    this.productPageService.updateCountCart()
  }
  
  public itemPrice(): void {
    this.totalPrice = 0;

    for (let item of this.cartItem) {
      if (item.discountPrice) {
        this.totalPrice += (+item.discountPrice * (this.itemQuantity[item.id] || 1));
      } else {
        this.totalPrice += (+item.price * (this.itemQuantity[item.id] || 1));
      }
    }
  }

  public getQuantity(itemId: number) {
    if(this.productPageService.getProductQuantity(+itemId)){
      return this.productPageService.getProductQuantity(+itemId)
    } else {
      return this.itemQuantity[itemId]
    }
  }

  public increaseQuantity(itemId: number) {
    for(let item of this.cartItem) {
      if(item.id === itemId){
        console.log('item.quantity', item.quantity);
        if(this.quantity >= item.quantity) {
          return
        } else {
          this.quantity++
          this.productPageService.increaseQuantity(itemId)
        }
      }
    }
  }

  public decreaseQuantity(itemId: number) {
        if(this.quantity < 1) {
          return
        } else {
          this.quantity--
          this.productPageService.decreaseQuantity(itemId)
        }
  }

  public removeItem(item: Product) {
    this.productPageService.removeItemFormCart(item)
    console.log('delete item', item);
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
   const screenWidth = window.innerWidth
   const xClick = event.clientX
   const yClick = event.clientY

   const minX = screenWidth - 108;
   const maxX = screenWidth - 70;
   const minY = 34;
   const maxY = 62;

   const minXPopup = (screenWidth - 735) / 2;
   const maxXPopup = 735 + ((screenWidth - 735) / 2);
   const minYPopup = 30;
   const maxYPopup = 625;

   const isInsidePopup = xClick >= minX && xClick <= maxX && yClick >= minY && yClick <= maxY;
   const isOutsidePopup = xClick < minXPopup || xClick > maxXPopup || yClick > maxYPopup || yClick < minYPopup;

    if (isInsidePopup) {
      this.popupService.togglePopup(true);
    } else if (isOutsidePopup) {
      this.popupService.togglePopup(false);
    }
  }

  public closePopup() {
    this.popupService.togglePopup(false);
  }

  public redirectToOrderPage() {
    this.popupService.togglePopup(false);
    this.authService._openHeader$.next(false);
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
