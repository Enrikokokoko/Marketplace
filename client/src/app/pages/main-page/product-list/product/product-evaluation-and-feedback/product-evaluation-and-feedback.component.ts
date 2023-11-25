import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../../shared/interface/product';
import { STAR } from '../../../../../shared/constants/product/product';

@Component({
  selector: 'app-product-evaluation-and-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-evaluation-and-feedback.component.html',
  styleUrl: './product-evaluation-and-feedback.component.scss'
})
export class ProductEvaluationAndFeedbackComponent {
  @Input() item!: Product;

  public star = STAR;
}
