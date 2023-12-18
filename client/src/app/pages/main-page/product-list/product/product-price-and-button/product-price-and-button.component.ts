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
  public localItem: any

  @Input() item!: Product;

  public constructor(private productPageService: ProductPageService ) {}

  public ngOnInit(): void {
    
  }

  public addItem(item: Product): void {
    this.productPageService.addItemToCart(item)
  }
}
