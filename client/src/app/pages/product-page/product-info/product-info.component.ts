import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageService } from '../../../shared/services/product-page.service';
import { PRODUCT_PAGE_CONFIG } from '../../../shared/constants/product-page/product-page.config';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { Product_One, img } from '../../../shared/interface/product';
import { DELIVERY, GUARD, PAYMENT, RATING, RETURN } from '../../../shared/constants/product-page/product-img';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RatingComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  public choosenCity: string = 'Kiev'
  public productConfig = PRODUCT_PAGE_CONFIG
  public productData!: Product_One
  public selectedImage: any
  public amount!: number
  public payment = PAYMENT
  public delivery = DELIVERY
  public guard = GUARD
  public return = RETURN

  @ViewChild('slickModal') slickCarousel!: SlickCarouselComponent;

  public constructor(private productPageService: ProductPageService) {
      this.productData = this.productPageService.getProductData()
  }

  public ngOnInit(): void {
    this.activateImageStyle(0)
    console.log(this.productData);
    this.amount = Math.round((100 - ((this.productData.discountPrice* 100) / this.productData.price)))
  }

  public selectImage(image: any) {
    this.selectedImage = image
    const indexImg = this.productData.img.findIndex(img => img.id === image.id)
    console.log(this.slickCarousel.afterChange);
    
    this.slickCarousel.slickGoTo(indexImg)
  }

  public onSlideChange(event: any) {
    this.activateImageStyle(event.currentSlide);
  }

  public activateImageStyle(index: any) {
    const selectedImg = this.productData.img[index]
    this.selectedImage = selectedImg
  }

  public isImageSelected(index: any): boolean {
    return this.selectedImage?.id === index
  }
}
