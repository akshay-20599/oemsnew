import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../loginservice/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private lioginservice:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq =request;
    let token= this.lioginservice.getToken()
    if(token!=null){
      authReq=authReq.clone({
        setHeaders:{authorization:`Bearer ${token}`}
      })
    }
    return next.handle(authReq);//to set auth to server
  }
}
