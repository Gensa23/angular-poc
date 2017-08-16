import { AuthenticationGuard } from './../authentication.guard';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationGuard]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router, private authenticationGuard: AuthenticationGuard) { }

  ngOnInit() {
  }

  submit() {
    this.authenticationGuard.login(this.username, this.password).subscribe(
      response => {
        this.router.navigate(['/profile']);
      },
      error => {
        console.log('Invalid credentials');
      } );

  }

}
