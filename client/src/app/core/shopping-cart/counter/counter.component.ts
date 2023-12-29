import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interface/product';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public clickCount: number = 0
  public statusButton!: boolean;
  @Input() item!: Product
  @Input() quantity!: number

  public constructor(private productPageService: ProductPageService, private toaster: ToastrService) {}

  public ngOnInit() {
    this.clickCount += this.quantity
  }

  public increaseQuantity(itemId: number) {
    this.clickCount++
    if(this.clickCount >= (this.item.quantity + 4) && this.quantity >= this.item.quantity) {
      this.toaster.error('Product limit has been reached')
    }
    if(this.quantity >= this.item.quantity) {
      return
    } else {
      this.productPageService.increaseQuantity(itemId)
    }
  }

  public decreaseQuantity(itemId: number) {
    if(this.quantity <= 1) {
      return
    } else {
      this.productPageService.decreaseQuantity(itemId)
    }
  }
}
