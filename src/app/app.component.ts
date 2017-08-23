import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular POC';
  constructor(private router: Router) {}
  gallery() {
    console.log('Gallery');
    this.router.navigate(['/gallery']);
  }
}
