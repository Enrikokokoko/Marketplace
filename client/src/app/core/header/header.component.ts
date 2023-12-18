import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderAccountComponent } from './header-account/header-account.component';
import { HeaderShoppingCartComponent } from './header-shopping-cart/header-shopping-cart.component';
import { FAVORITE, LOGO, MENU, ORDER_LIST } from '../../shared/constants/header/icon';
import { HeaderLanguageComponent } from './header-language/header-language.component';
import { Subject, takeUntil, timer } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

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
  public constructor(public authService: AuthService, private cd: ChangeDetectorRef, private router: Router) {}

  public menu: string = MENU
  public logo: string = LOGO
  public favorite: string = FAVORITE
  public orderList: string = ORDER_LIST

  private destroy$: Subject<void> = new Subject();

  public token!: string | null;
  public statusMenu: boolean = false;
  public statusLogin: boolean = true;

  public ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token');
    }

    if(this.token) {
      this.authService._isLoggedIn$.next(true);
      this.cd.detectChanges()
    } else {
      this.closeLogin()
    }
  }

  public closeLogin(): void {
    timer(0)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.authService._isLoggedIn$.next(false);
        this.cd.detectChanges()
      });
  }

  public openMenu(): void {
    this.statusMenu = !this.statusMenu; 
  }

  public smoothScroll(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

