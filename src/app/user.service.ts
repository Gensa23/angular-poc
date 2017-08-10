import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getUserProfile(): Observable<User> {
      return this.http
        .get('http://localhost:3000/user/0')
        .map(res => res.json());
  }

  updateUserProfile(user: User): Promise<User> {
    return this.http
      .post('http://localhost:3000/user/0', user)
      .toPromise()
      .then(res => res.json())
      .catch(error => console.log('post error', error));
  }
}
