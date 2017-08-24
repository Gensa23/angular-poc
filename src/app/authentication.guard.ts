import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  token = '';
  constructor(private http: Http) { }

  login(username: String, password: String) {
    return this.http.post(`http://localhost:3000/api/login`, {username, password})
      .map(response => response.json())
      .map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
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

  logout() {
    localStorage.setItem('token', '');
  }
}
