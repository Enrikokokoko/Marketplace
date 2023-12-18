import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../../../shared/constants/product/product';
import { ProductComponent } from '../../product-list/product/product.component';

@Component({
  selector: 'app-our-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './our-product-list.component.html',
  styleUrl: './our-product-list.component.scss'
})
export class OurProductListComponent {
  public products = PRODUCTS
}
