import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class EditProfileComponent implements OnInit {
  public userProfile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.profileService.getProfile('0').then(user => this.userProfile = user);
  }

  submit() {
    this.profileService.postProfile('0', this.userProfile).then(userProfile => this.userProfile = userProfile);
  }
}
