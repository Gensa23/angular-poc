import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  providers: [ProfileService]
})
export class ViewProfileComponent implements OnInit {
  private userProfile: UserProfile;
  title = 'Profile';

  constructor(private profileService: ProfileService) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.profileService.getProfile('0').then(user => this.userProfile = user);
  }
}
