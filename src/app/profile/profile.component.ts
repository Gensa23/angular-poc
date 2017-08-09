import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  private id: String;
  private name: String;
  private age: Number;

  constructor(private profileService: ProfileService) {
    this.id = '0';
  }

  ngOnInit() {
    this.profileService.getProfile(this.id)
      .then(profile => ({ name: this.name, age: this.age } = profile));
  }

}
