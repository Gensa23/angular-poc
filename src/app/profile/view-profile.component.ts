import { AuthenticationGuard } from './../authentication.guard';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styles: [`.example-card {
  width: 400px;}
  `],
  providers: [ProfileService]
})
export class ViewProfileComponent implements OnInit {
  private userProfile: UserProfile;
  title = 'Profile';

  constructor(private profileService: ProfileService, private authenticationGuard: AuthenticationGuard, private router: Router) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.profileService.getProfile('0').then(user => this.userProfile = user);
  }


  logout() {
    this.authenticationGuard.logout();
    this.router.navigate(['/']);
  }
}
