import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(private authService: AuthService, private router: Router) {}

  private isLoggin!: boolean;

  public canActivate(): boolean{
    this.authService.openHeader$.subscribe((value) => {
      this.isLoggin = value
    })
    if(this.isLoggin) {
      return true
    } else {
      this.router.navigateByUrl('login')
      return false
    }
  }
} 