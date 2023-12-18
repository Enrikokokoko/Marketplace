import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, switchMap, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const newCloneRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(newCloneRequest).pipe(catchError((err: HttpErrorResponse)=> {
      if(err.status === 401) {
        return this.authService.refreshToken().pipe(switchMap((data) => {
          const newRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${data.accessToken}`
            }
          })
          alert('Token has been updated')
          return next.handle(newRequest)
        }))
      } 
      return throwError(() => err)
    }
    ))
  }
}