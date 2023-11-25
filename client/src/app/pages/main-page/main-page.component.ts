import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { SliderComponent } from './slider/slider.component';
import { LastProductsComponent } from './last-products/last-products.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ROUTES, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule, 
    CategoriesComponent, 
    SliderComponent, 
    LastProductsComponent, 
    OurProductsComponent, 
    FavoriteProductsComponent,
    NewProductsComponent,
    ProductListComponent,
    RouterModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
