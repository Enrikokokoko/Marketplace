import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interface/product';
import { PRODUCTS } from '../../../shared/constants/product/product';
import { ProductComponent } from '../product-list/product/product.component';
import { OurProductListComponent } from './our-product-list/our-product-list.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, OurProductListComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {
}
