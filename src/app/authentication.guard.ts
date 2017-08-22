import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  token = '';
  constructor(private http: Http) { }

  canActivate() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
