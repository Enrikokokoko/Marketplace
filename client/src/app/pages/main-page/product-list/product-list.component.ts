import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PRODUCT } from '../../../shared/constants/product/product';
import { PRODUCT_CONFIG } from '../../../shared/constants/product/product-config';
import { ProductComponent } from './product/product.component';
import { Product, Product_One } from '../../../shared/interface/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products: Product[] = PRODUCT;
  public productConfig = PRODUCT_CONFIG;
}
