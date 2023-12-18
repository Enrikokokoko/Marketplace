import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public constructor(private authService: AuthService, private router: Router, private cd: ChangeDetectorRef) {}
  private destroy$: Subject<void> = new Subject()

  public ngOnInit(): void {
    this.authService
      .logout()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        localStorage.removeItem('token')
        this.authService._isLoggedIn$.next(false);
        this.cd.detectChanges()
        this.router.navigateByUrl('main')
      })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
