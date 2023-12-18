import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { StarsComponent } from '../rating/stars/stars.component';
import { FRAME } from '../../../shared/constants/product-page/product-img';
import { Product_One } from '../../../shared/interface/product';
import { FrameComponent } from './frame/frame.component';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, StarsComponent, FrameComponent, PopupComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  public productData: Product_One
  public amount: number = 0
  public popupStatus: boolean = false;

  public constructor(private productPageService: ProductPageService) {
        this.productData = this.productPageService.getProductData()
    console.log('3333', this.productData);
  }

  public ngOnInit(): void {
    let sum = 0
    for(let i = 0; i < this.productData.feedback.length; i++) {
      sum += this.productData.feedback[i].rating
    }
    
    this.amount = (Math.round((sum / this.productData.feedback.length) * 10) /10)
  }

  public openPopup(): void {
    this.popupStatus = !this.popupStatus
  }

  public closePopup(value: boolean): void {
    this.popupStatus = value
  }
}
