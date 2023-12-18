import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product_One, feedback } from '../../../../shared/interface/product';
import { RATING } from '../../../../shared/constants/product-page/product-img';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss'
})
export class StarsComponent {
  public ratingBackground!: number;
  // public amount!: number
  public rating = RATING

  @Input() data!: Product_One
  @Input() review!: feedback

  public ngOnInit(): void {
    if(this.data) {
      let sum = 0
      for(let i = 0; i < this.data.feedback.length; i++) {
        sum += this.data.feedback[i].rating 
      }
      this.ratingBackground = ((sum / this.data.feedback.length)*32)
    } else {
      this.ratingBackground = (((this.review.rating)*32) - 1)
    }
    // this.amount = Math.round((100 - ((this.data.discountPrice* 100) / this.data.price)))
  }
}
