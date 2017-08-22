import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../reducers'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class EditProfileComponent implements OnInit {
  public userProfile: UserProfile;

  constructor(private store: Store<State>) {
    this.userProfile = new UserProfile();
    store
      .select('userProfile')
      .subscribe(state => console.log)
    
  }

  ngOnInit() {
    
  }

  submit() {
    this.store.dispatch({ type: 'UPDATE_AGE', age: 10 })
  }
}
