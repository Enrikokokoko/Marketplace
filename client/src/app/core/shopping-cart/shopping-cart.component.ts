import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/interface/product';
import { BLACK_CROSS, CROSS, DOTS, EMPTY_CART, MINUS, PLUS } from '../../shared/constants/product-page/product-img';
import { ProductPageService } from '../../shared/services/product-page.service';
import { Subject } from 'rxjs';
import { PopupService } from '../../shared/services/popup.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
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
  public totalPrice!: number

  public constructor(private productPageService: ProductPageService, private popupService: PopupService) {

  }

  public ngOnInit(): void {
    this.productPageService.cartItem$.subscribe((value) => {
      this.cartItem = value
    })
    this.productPageService.displayCartItem()
    let sum = 0
    
    for(let item of this.cartItem) {
      this.quantity = this.productPageService.getProductQuantity(+item.id)
      if(item.discountPrice) {
        sum += (+item.discountPrice)
      } else {
        sum += (+item.price)
      }
    }
    this.totalPrice = sum
  }

  public getQuantity(itemId: number) {
    this.quantity = this.productPageService.getProductQuantity(+itemId)
  }

  public increaseQuantity(itemId: number) {
    for(let item of this.cartItem) {
      if(item.id === itemId){
        if(this.quantity > item.quantity) {
          return
        } else {
          this.productPageService.increaseQuantity(itemId)
        }
      }
    }
  }

  public decreaseQuantity(itemId: number) {
    if(this.quantity < 1) {
      return
    } else {
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

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
