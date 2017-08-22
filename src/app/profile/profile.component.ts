import { Observable } from 'rxjs/Observable';
import { StoreFacadeService } from './../store-facade.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: []
})
export class EditProfileComponent implements OnInit {
  userProfile: UserProfile;
  disableButton = false;

  constructor(private store: StoreFacadeService, private router: Router) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.store.profile.subscribe(res => this.userProfile = res);
    this.store.disableSubmitButton.subscribe(res => this.disableButton = res);
    this.store.startCounting();
  }

  submit() {
    this.store.postProfile('0', this.userProfile);
    this.store.clearTimer();
  }
}
