import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRAME } from '../../../../shared/constants/product-page/product-img';
import { Product_One, feedback } from '../../../../shared/interface/product';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  public frame = FRAME
  public statusBorder: boolean = false
  public statusReview:  boolean = false;
  public frameWidth!: number;
  public procent!: number;
  public arr!: feedback[]

  @Input() data!: Product_One
  @Input() rating!: number

  public ngOnInit() {
    this.arr = (this.data.feedback.filter(value => value.rating === this.rating))
    
    this.frameWidth = (2.51 * ((this.arr.length * 100) / this.data.feedback.length))

    this.procent = Math.round(this.frameWidth / 2.51)
  }

  public onBorder(): void {
    if(this.arr.length > 0) {
      this.statusReview = true;
    }
    this.statusBorder = true
  }

  public outOfBorder(): void {
    if(this.statusReview === true){
      this.statusReview = false
    }
    this.statusBorder = false
  }
}
