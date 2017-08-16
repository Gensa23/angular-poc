import { UserProfile } from './profile/user-profile';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  token = '';
  constructor(private http: Http) { }

  login(username: String, password: String) {
    return this.http.post(`http://localhost:3000/login`, {username, password})
      .map(response => response.json())
      .map(response => {
        if (response.token) {
          localStorage.setItem('token', JSON.stringify(response));
        }
      });
  }
  canActivate() {
    console.log(this.token);
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
