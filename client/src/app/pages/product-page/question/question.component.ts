import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { StarsComponent } from '../rating/stars/stars.component';
import { Product_One } from '../../../shared/interface/product';
import { STAR_BLUE } from '../../../shared/constants/product-page/product-img';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, StarsComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  public productData: Product_One
  public starBlue = STAR_BLUE 
  public amount: number = 0

  public constructor(private productPageService: ProductPageService) {
        this.productData = this.productPageService.getProductData()
        console.log('4444', this.productData);
  }

  public ngOnInit(): void {
    let sum = 0
    for(let i = 0; i < this.productData.feedback.length; i++){
      sum += this.productData.feedback[i].rating
    }
    this.amount = (Math.round((sum / this.productData.feedback.length)* 10) / 10)
  }
}
