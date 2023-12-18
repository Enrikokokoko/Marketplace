import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public logo = LOGO;
  
  private destroy$: Subject<void> = new Subject();
  public isSubmitted: boolean = false;
  public form!: FormGroup;
  public token!: string | null;

  public constructor(
    private formBilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) {}

  public ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token');
    }

    if (this.token) {
      this.authService._openHeader$.next(true);
      this.authService._isLoggedIn$.next(true);
      this.cd.detectChanges();
      this.router.navigateByUrl('main');
    } else {
      this.closeHeader();
      this.form = this.formBilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [Validators.required, Validators.min(5), Validators.max(12)],
        ],
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
    this.isSubmitted = false;

    this.authService
      .login(this.form.value)
      .pipe(takeUntil(this.destroy$))
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

  public redirectToRegistr(): void {
    this.router.navigateByUrl('registration');
  }

  public ngOnDestroy(): void {
    this.authService._openHeader$.next(true);
    this.cd.detectChanges();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
