import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Product_One } from '../../../../shared/interface/product';
import { ProductEvaluationAndFeedbackComponent } from './product-evaluation-and-feedback/product-evaluation-and-feedback.component';
import { ProductPriceAndButtonComponent } from './product-price-and-button/product-price-and-button.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductEvaluationAndFeedbackComponent, ProductPriceAndButtonComponent, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public constructor(private router: Router) {}

  @Input() item!: Product;

  public redirectToProductPage(productName: string): void {
    this.router.navigate([`product/${productName}`], { queryParams: { product: productName } })
  }
}
