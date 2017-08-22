import { UserProfile } from './user-profile';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  getProfile(id: String): Observable<UserProfile> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`http://localhost:3000/user/${id}`, options)
      .map(response => response.json());
  }

  postProfile(id: String, profile: UserProfile): Observable<UserProfile> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`http://localhost:3000/user/${id}`, {...profile}, options)
      .map(response => response.json());
  }

}
