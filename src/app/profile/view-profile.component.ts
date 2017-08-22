import { AuthenticationGuard } from './../authentication.guard';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from '../user-profile';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../reducers'


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  providers: [ProfileService]
})
export class ViewProfileComponent implements OnInit {
  private userProfile: UserProfile;
  title = 'Profile';

  constructor(private profileService: ProfileService, private authenticationGuard: AuthenticationGuard, private router: Router, private store: Store<State>) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.profileService.getProfile('0')
      .then(user => this.userProfile = user)
      .then(userProfile => this.store.dispatch({ type: 'RECEIVE_USER', payload: userProfile }));
  }


  logout() {
    this.authenticationGuard.logout();
    this.router.navigate(['/']);
  }
}
