import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../../shared/interface/product';
import { SHOPPING_CART } from '../../../../../shared/constants/product/product';

@Component({
  selector: 'app-product-price-and-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-price-and-button.component.html',
  styleUrl: './product-price-and-button.component.scss'
})
export class ProductPriceAndButtonComponent {
  public cart = SHOPPING_CART;

  @Input() item!: Product;
}
