import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Product_One } from '../../../../../shared/interface/product';
import { SHOPPING_CART } from '../../../../../shared/constants/product/product';
import { ProductPageService } from '../../../../../shared/services/product-page.service';

@Component({
  selector: 'app-product-price-and-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-price-and-button.component.html',
  styleUrl: './product-price-and-button.component.scss'
})
export class ProductPriceAndButtonComponent {
  public cart = SHOPPING_CART;
  public cartItems!: Product[]
  public carts: Product[] = [];
  public cartItem: Product[] = [];
  public localItem: any

  @Input() item!: Product;

  public constructor(private productPageService: ProductPageService ) {}

  public ngOnInit(): void {
    this.productPageService.cartItem$.subscribe((value) => {
      if(value && value.length > 0) {
        this.carts = value
      } else {
        if(typeof localStorage !== 'undefined') {
          this.localItem = localStorage.getItem('cart')
          if(this.localItem !== null) {
            this.cartItem = JSON.parse(this.localItem)
          }
        }
        this.carts = this.cartItem
      }
    })
    this.productPageService.updateCountCart()
  }

  public statusItem(item: Product): void {
    if(this.carts.some(value => value.id === item.id)){
      this.productPageService.removeItemFormCart(item)
    } else {
      this.productPageService.addItemToCart(item)
    }
  }

  public statusButton(index: any): boolean{
    return this.carts?.some(value => value.id === index)
  }
}
