import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interface/product';
import { PRODUCTS } from '../../../shared/constants/product/product';
import { ProductComponent } from '../product-list/product/product.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {
  public products = PRODUCTS
}
