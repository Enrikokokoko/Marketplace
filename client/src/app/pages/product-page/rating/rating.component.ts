import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RATING } from '../../../shared/constants/product-page/product-img';
import { Product_One } from '../../../shared/interface/product';
import { StarsComponent } from './stars/stars.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, StarsComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() data!: Product_One
}
