import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { LOGO } from '../../shared/constants/auth/auth-foto';
import { LIST } from '../../shared/constants/header/icon';
import { ProductPageService } from '../../shared/services/product-page.service';
import { ProductQuantities } from '../../shared/interface/quantity';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.scss'
})
export class OrderRegisterComponent {
  private destroy$: Subject<void> = new Subject()

  public logo = LOGO;
  public list = LIST;

  public localQuantity!: string | null
  public itemQuantity: ProductQuantities = {}
  public count: number | string = '0';

  public constructor(private authService: AuthService, private productPageService: ProductPageService) {}

  public ngOnInit() {
    this.authService._openHeader$.next(false)
    this.productPageService.quantityCount$.subscribe((value) => {
      if(value) {
        let sum = 0
        for(let key in value) {
          sum += value[key]
        }
        this.count = sum
      } else {
        if(typeof localStorage !== 'undefined') {
          this.localQuantity = localStorage.getItem('productQuantity')

          if(this.localQuantity !== null) {
            this.itemQuantity = JSON.parse(this.localQuantity)
          }
        }

        let sum = 0
        for(let key in this.itemQuantity) {
          sum += value[key]
        }
        this.count = sum
      }
    })

    this.productPageService.displayItemQuantity()
    this.productPageService.updateCountCart()
  }

  public ngOnDestroy() {
    this.authService._openHeader$.next(true)
    this.destroy$.next()
    this.destroy$.complete()
  }
}
