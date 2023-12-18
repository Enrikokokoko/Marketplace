import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { CATEGORIES } from '../../shared/constants/categories/categories';
import { OurProductsComponent } from '../main-page/our-products/our-products.component';
import { OurProductListComponent } from '../main-page/our-products/our-product-list/our-product-list.component';

@Component({
  selector: 'app-subcategories',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OurProductListComponent],
  templateUrl: './subcategories.component.html',
  styleUrl: './subcategories.component.scss'
})
export class SubcategoriesComponent {
  public constructor(private router: ActivatedRoute, private rout: Router) {}

  public categories = CATEGORIES;
  public queryParams!: string;
  public subcategories!: any

  public ngOnInit() {
    this.queryParams = this.router.snapshot.params['categoryName'];
    this.subcategories = this.categories.filter(value => value.name === this.queryParams) 
  }

  public redirectToProduct(subcategoryName: string, productName: string):void {
    const product = productName.toLowerCase().replace(/\s+/g, '_');

    this.rout.navigate([`/category/${subcategoryName}/${productName}`], {queryParams: {category: subcategoryName, subcategory: productName}})
  }
}
