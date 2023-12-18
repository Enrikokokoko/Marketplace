import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Subject, takeUntil, timer } from 'rxjs';
import { LOGO } from '../../shared/constants/auth/auth-foto';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule, RouterOutlet],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.scss',
})
export class RegistrComponent {
  public logo = LOGO;

  public form!: FormGroup;
  public headerStatus!: boolean;
  private destroy$: Subject<void> = new Subject();
  public token!: string | null;
  public isSubmitted: boolean = false;

  public constructor(
    private formBilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) {}

  public ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token');
    }

    if (this.token) {
      this.authService._openHeader$.next(true);
      this.authService._isLoggedIn$.next(true)
      this.cd.detectChanges();
      this.router.navigateByUrl('main');
    } else {
      this.closeHeader();
      this.form = this.formBilder.group({
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [Validators.required, Validators.min(5), Validators.max(12)],
        ],
        confirmPassword: [null, [Validators.required]],
      });
    }
  }

  public closeHeader(): void {
    timer(0)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.authService._openHeader$.next(false);
        this.authService._isLoggedIn$.next(false);
        this.cd.detectChanges();
      });
  }


  public onSubmit(): void {
    if (this.form) {
      this.form.disable();
    }
    this.isSubmitted = true;

    this.authService
      .registr({
        firstName: this.convertName(this.form.value.firstName),
        lastName: this.convertName(this.form.value.lastName),
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe(
        (data) => {
          if (data.hasOwnProperty('accessToken')) {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('token', data.accessToken);
            }
            this.router.navigateByUrl('main');
            this.authService._openHeader$.next(true);
            this.authService._isLoggedIn$.next(true);
            this.cd.detectChanges();
          } else {
            if (this.form) {
              this.form.enable();
            }
          }
        },
        (error) => {
          if (this.form) {
            if(Array.isArray(error.error.message)) {
              error.error.message.forEach((el: string) => {
                this.toaster.error(el);
              });
            } else {
              this.toaster.error(error.error.message)
            }
            this.form.enable();
          }
        }
      );
  }

  public redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

  public convertName(value: any): string {
    if(value) {
      return value.split('')[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase()
    } else {
      return value
    }
  }

  public ngOnDestroy(): void {
    this.authService._openHeader$.next(true);
    this.cd.detectChanges();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
