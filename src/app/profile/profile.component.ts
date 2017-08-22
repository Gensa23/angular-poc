import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';
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

  constructor(private profileService: ProfileService, private store: Store<State>) {
    this.userProfile = new UserProfile();
    store
      .select('userProfile')
      .subscribe((userProfile: UserProfile) => this.userProfile = userProfile)
  }

  ngOnInit() { 
    this.profileService.getProfile('0')
      .then(user => this.userProfile = user)
      .then(userProfile => this.store.dispatch({ type: 'RECEIVE_USER', payload: userProfile }));
  }

  submit() {
    this.profileService.postProfile('0', this.userProfile)
      .then(userProfile => this.userProfile = userProfile)
      .then(userProfile => this.store.dispatch({ type: 'RECEIVE_USER', payload: userProfile }));
  }
}
