import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SLIDER } from '../../../shared/constants/slider/slider';
import { SLIDER_CONFIG } from '../../../shared/constants/slider/slider-config';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CATEGORIES, CATEGORY_CONFIG } from '../../../shared/constants/categories/categories';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  public categories = CATEGORIES;
  public categoryConfig = CATEGORY_CONFIG;
}
