import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Product, Product_One } from '../../shared/interface/product';
import { PRODUCT, PRODUCT_ONE } from '../../shared/constants/product/product';
import { BUTTONS } from '../../shared/constants/product/product-page';
import { ProductPageService } from '../../shared/services/product-page.service';
import { ProductListComponent } from '../main-page/product-list/product-list.component';
import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent, RatingComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  public constructor(private router: ActivatedRoute, private rout: Router, private productPageService: ProductPageService) {
  }

  public buttons = BUTTONS
  public product: Product_One[] = PRODUCT_ONE;
  public queryParam!: string;
  public productInfo!: Product_One;

  public ngOnInit(): void {
    this.queryParam = this.router.snapshot.params['productName'];
    this.productInfo = this.product.filter(value => value.name === this.queryParam)[0]
    this.productPageService.setProductData(this.productInfo)
  }

  public redirctToChoosenButton(way: string): void {
    const currentUrl = this.rout.parseUrl(this.rout.url)
    const queryParam = currentUrl.queryParams

    this.rout.navigate([`product/${this.queryParam}/${way}`, {queryParam: queryParam}])
  }
}
