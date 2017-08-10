import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  editable = false;

  newUser: User;
  user: User;

  ngOnInit(): void {
      this.getUserProfile();
  }

  editClickButton(): void {
      this.editable = true;
  }

  getUserProfile(): void {
      this.userService.getUserProfile().subscribe(user => this.user = user);
    }
  submitProfile(name: string, age: number): void {
      console.log(name + age);
      this.userService.updateUserProfile(new User(name, age)).then(user => this.user = user);
      this.editable = false;

  }
}
