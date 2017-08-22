import { StoreFacadeService } from './../store-facade.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router, private loginService: LoginService, private store: StoreFacadeService) { }

  ngOnInit() {
  }

  submit() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        this.router.navigate(['/profile']);
      },
      error => {
        console.log('Invalid credentials');
      } );

  }

}
