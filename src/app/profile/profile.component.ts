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
    this.store.dispatch({ type: 'FETCH_USER' })
  }

  submit() {
    this.store.dispatch({ type: 'POST_USER', payload: { name: this.userProfile.name, age: this.userProfile.age }})
  }
}
