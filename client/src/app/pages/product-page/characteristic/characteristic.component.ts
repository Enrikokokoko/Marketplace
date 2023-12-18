import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { RatingComponent } from '../rating/rating.component';
import { STAR_BLUE } from '../../../shared/constants/product-page/product-img';

@Component({
  selector: 'app-characteristic',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './characteristic.component.html',
  styleUrl: './characteristic.component.scss'
})
export class CharacteristicComponent {
  public productData: any
  public amount: number = 0
  public starBlue = STAR_BLUE 

  public constructor(private productPageService: ProductPageService) {
        this.productData = this.productPageService.getProductData()
        console.log('2222', this.productData);
  }

  public ngOnInit(): void {
    let sum = 0
    for(let i = 0; i < this.productData.feedback.length; i++){
      sum += this.productData.feedback[i].rating
    }
    this.amount = (Math.round((sum / this.productData.feedback.length)* 10) / 10)
  }
}
