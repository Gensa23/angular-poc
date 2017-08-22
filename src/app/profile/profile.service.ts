import { UserProfile } from '../user-profile';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  getProfile(id: String): Promise<UserProfile> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`http://localhost:3000/user/${id}`, options)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  postProfile(id: String, profile: UserProfile): Promise<UserProfile> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`http://localhost:3000/user/${id}`, {...profile}, options)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }

}