import { Observable } from 'rxjs/Observable';
import { StoreFacadeService } from './../store-facade.service';
import { LoginService } from './../login.service';
import { AuthenticationGuard } from './../authentication.guard';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {UserProfile } from './user-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  providers: [LoginService]
})
export class ViewProfileComponent implements OnInit {
  private userProfile: UserProfile;
  title = 'Profile';

  constructor(private store: StoreFacadeService, private loginService: LoginService, private router: Router) {
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.store.profile.subscribe(res => this.userProfile = res);
    this.store.getProfile('0');

  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
