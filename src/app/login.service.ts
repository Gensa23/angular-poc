import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(username: String, password: String) {
    return this.http.post(`http://localhost:3000/login`, {username, password})
      .map(response => response.json())
      .map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      });
  }

  logout() {
    localStorage.setItem('token', '');
  }

}
