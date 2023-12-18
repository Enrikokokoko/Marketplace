import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, takeWhile, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  public constructor(private router: Router) {}
  
  public count: number = 10
  
  public ngOnInit(): void {
    timer(9000).subscribe(() => {
      this.router.navigateByUrl('/main')
    })
    interval(1000).pipe(takeWhile(() => this.count > 1)).subscribe(() => {
        this.count--
    })
   }
}
