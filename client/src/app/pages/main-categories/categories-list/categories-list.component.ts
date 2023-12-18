import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from '../../../shared/constants/categories/categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  public constructor(private router: Router) {}

  public categories = CATEGORIES;

  public redirectToSubcategory(categoryName: string): void {
    const category = categoryName.toLowerCase().replace(/\s+/g, '_');

    this.router.navigate([`/category/${categoryName}`], {queryParams: {category: categoryName}})
  }

  public redirectToProduct(productName: string):void {
    const product = productName.toLowerCase().replace(/\s+/g, '_');

    this.router.navigate([`/category/subcategory/${product}`], {queryParams: {subcategory: product}})
  }
}
