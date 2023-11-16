import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderAccountComponent } from './header-account/header-account.component';
import { HeaderShoppingCartComponent } from './header-shopping-cart/header-shopping-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent, 
    HeaderSearchComponent, 
    HeaderAccountComponent,
    HeaderShoppingCartComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isOpen: boolean = false;

  public openMenu(): void {
    this.isOpen = !this.isOpen 
  }
}

