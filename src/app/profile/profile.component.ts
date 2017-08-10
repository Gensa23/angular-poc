import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  private userProfile: UserProfile;

  constructor(private profileService: ProfileService) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.profileService.getProfile('0').then(user => this.userProfile = user);
  }

  submit() {
    this.profileService.postProfile('0', this.userProfile).then(userProfile => this.userProfile = userProfile);
  }
}
