import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../shared/interface/product';
import { ProductEvaluationAndFeedbackComponent } from './product-evaluation-and-feedback/product-evaluation-and-feedback.component';
import { ProductPriceAndButtonComponent } from './product-price-and-button/product-price-and-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductEvaluationAndFeedbackComponent, ProductPriceAndButtonComponent, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() item!: Product;
}
