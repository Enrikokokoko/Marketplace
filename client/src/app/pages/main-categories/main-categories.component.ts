import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-categories',
  standalone: true,
  imports: [CommonModule, SliderComponent, CategoriesListComponent, RouterOutlet],
  templateUrl: './main-categories.component.html',
  styleUrl: './main-categories.component.scss'
})
export class MainCategoriesComponent {
  
}
