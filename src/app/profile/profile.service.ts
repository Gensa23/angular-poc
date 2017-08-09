import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  getProfile(id: String): Promise<any> {
    return this.http.get(`http://localhost:3000/user/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  postProfile(id: String, profile: any): Promise<any> {
    return this.http.post(`http://localhost:3000/user/${id}`, profile)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }


}
