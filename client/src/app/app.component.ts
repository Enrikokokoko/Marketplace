import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule, ToastrModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public constructor(public authService: AuthService) {
  }

  private token!: string | null;
  ngOnInit() {
    if(typeof localStorage !== 'undefined') {
    console.log("localStorage.getItem('token')",localStorage.getItem('token'));
    this.token = localStorage.getItem('token')
    }

    if(this.token){
      this.authService._isLoggedIn$.next(true)
    } else {
      this.authService._isLoggedIn$.next(false)
    }

    
  }
}
