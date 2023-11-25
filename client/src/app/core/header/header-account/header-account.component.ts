import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCOUNT, ARROW } from '../../../shared/constants/header/icon';
import { Subject, takeUntil, timer } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-account.component.html',
  styleUrl: './header-account.component.scss',
})
export class HeaderAccountComponent {
  private destroy$: Subject<void> = new Subject()
  public disableBlock: boolean = false;
  public account: string = ACCOUNT;
  public arrow: string = ARROW;

  public statusAccount: boolean = false;

  public openAuth(): void {
    this.statusAccount = true;
  }

  public closeAuth(): void {
    this.disableBlock = true;
    timer(400)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.statusAccount = false;
      this.disableBlock = false;
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete();
  }
}
