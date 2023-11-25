import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserDataLogin, UserDataReg } from "../interface/userData";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor(private http: HttpClient) {}

  private _isLoggedIn$: Subject<boolean> = new BehaviorSubject(false);
  public _openHeader$: Subject<boolean> = new BehaviorSubject(true);

  public isLoggedIn$ = this._isLoggedIn$.asObservable()
  public openHeader$ = this._openHeader$.asObservable()

  public url: string = 'http://localhost:3333'

  public registr(user: UserDataReg): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>( `${this.url}/auth/registr`, user)
  }

  public login(user: UserDataLogin): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>( `${this.url}/auth/login`, user)
  }
}