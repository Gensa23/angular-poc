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
    store
      .select('userProfile')
      .subscribe((userProfile: UserProfile) => this.userProfile = userProfile)
  }

  ngOnInit() {
    this.store.dispatch({ type: 'FETCH_USER' })
  }


  logout() {
    this.authenticationGuard.logout();
    this.router.navigate(['/']);
  }
}
