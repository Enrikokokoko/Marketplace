import { ChangeDetectorRef, Component, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Subject, takeUntil, timer } from 'rxjs';
import { LOGO } from '../../shared/constants/auth/auth-foto';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.scss',
})
export class RegistrComponent {
  public logo = LOGO;

  public form!: FormGroup;
  public verifyPassword: boolean = false
  public headerStatus!: boolean;
  private destroy$: Subject<void> = new Subject();
  public token!: string | null;

  public constructor(
    private formBilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) {}

  public ngOnInit(): void {
    if(typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token')
      console.log("localStorage.getItem('token')", localStorage.getItem('token'));
    }

    if(this.token) {
      this.authService._openHeader$.next(true)
      this.cd.detectChanges()
      this.router.navigateByUrl('main');
    } else {
      this.closeHeader()
      this.form = this.formBilder.group({
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [Validators.required, Validators.min(5), Validators.max(12)],
        ],
      });
    }
  }

  public closeHeader(): void {
    timer(0).subscribe(() => {
      this.authService._openHeader$.next(false)
      this.cd.detectChanges()
    })
  }

  public togglePassword(): void {
    this.verifyPassword = !this.verifyPassword
  }

  public onSubmit(): void {
    if (this.form) {
      this.form.disable();
      this.togglePassword();
    }

    this.authService
      .registr(this.form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if(data.hasOwnProperty("accessToken")) {
          if(typeof localStorage !== 'undefined') {
            localStorage.setItem('token', data.accessToken)
          }
          this.router.navigateByUrl('main');
          this.authService._openHeader$.next(true)
          this.cd.detectChanges()
        } else {
          if(this.form){
            this.form.enable()
            this.togglePassword();
          }
        }
      },
      (error) => {
        if(this.form) {
          this.toaster.error(error.error.message)
          this.form.enable()
          this.togglePassword();
        }
      });

  }

  public redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
