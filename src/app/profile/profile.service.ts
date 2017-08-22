import { UserProfile } from '../user-profile';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProfileService {

  constructor(private http: Http, private actions$: Actions) { }

  @Effect() fetchUser$: Observable<Action> = this.actions$.ofType('FETCH_USER')
    .map(toPayload)
    .mergeMap(payload => {
      const headers = new Headers({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
      const options = new RequestOptions({ headers: headers });
      return this.http.get(`http://localhost:3000/user/0`, options)
        .map(response => response.json())
        .map(data => ({ type: 'RECEIVE_USER', payload: data }))
    })

    @Effect() postUser$: Observable<Action> = this.actions$.ofType('POST_USER')
      .map(toPayload)
      .mergeMap(payload => {
        const headers = new Headers({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(`http://localhost:3000/user/0`, payload, options)
          .map(response => response.json())
          .map(data => ({ type: 'RECEIVE_USER', payload: data }))
    })

}