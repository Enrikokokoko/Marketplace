import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES, LIST } from '../../../shared/constants/categories/categories';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  public constructor(private router: Router) {}

  public categories = CATEGORIES;
  public img = LIST;

  public redirectToCategory(): void {
    this.router.navigateByUrl('category')
  }
}
