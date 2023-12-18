import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private stautsSubject$: Subject<boolean> = new BehaviorSubject(false);
  public statusPopup$ = this.stautsSubject$.asObservable()


  public togglePopup(status: boolean) {
    this.stautsSubject$.next(status)
  }
}