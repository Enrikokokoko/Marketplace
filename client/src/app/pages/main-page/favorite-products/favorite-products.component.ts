import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-favorite-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.scss'
})
export class FavoriteProductsComponent {

}
