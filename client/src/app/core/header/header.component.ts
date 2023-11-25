import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderAccountComponent } from './header-account/header-account.component';
import { HeaderShoppingCartComponent } from './header-shopping-cart/header-shopping-cart.component';
import { LOGO, MENU } from '../../shared/constants/header/icon';
import { HeaderLanguageComponent } from './header-language/header-language.component';
import { Subscription, interval, takeWhile } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent, 
    HeaderSearchComponent, 
    HeaderAccountComponent,
    HeaderShoppingCartComponent,
    HeaderLanguageComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menu: string = MENU
  public logo: string = LOGO
  public count = 0
  public interval!: Subscription;


  public statusMenu: boolean = false;

  // public ngOnInit(): void {
  //   this.interval = interval(0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)
  //     .pipe(
  //       takeWhile(() => this.count < 140)
  //     )
  //     .subscribe(() => {
  //       this.isOpen = !this.isOpen;
  //       this.count++;
  //       console.log(this.count);
  //     });
  // }

  public openMenu(): void {
    this.statusMenu = !this.statusMenu; 
  }


}

