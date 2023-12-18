import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from '../../shared/constants/categories/categories';
import { OurProductsComponent } from '../main-page/our-products/our-products.component';
import { OurProductListComponent } from '../main-page/our-products/our-product-list/our-product-list.component';

@Component({
  selector: 'app-subproducts',
  standalone: true,
  imports: [CommonModule, OurProductListComponent],
  templateUrl: './subproducts.component.html',
  styleUrl: './subproducts.component.scss'
})
export class SubproductsComponent {
  public constructor(private router: ActivatedRoute, private rout: Router) {}

  public categories = CATEGORIES;
  public queryParams!: string;
  public subcategories!: any;
  public productName!: string;

  public ngOnInit() {
    this.productName = this.router.snapshot.params['productName'];
  }
}
