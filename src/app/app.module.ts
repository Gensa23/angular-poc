import { AuthenticationGuard } from './authentication.guard';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ViewProfileComponent} from './profile/view-profile.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    ViewProfileComponent,
    NotFoundComponent,
    LoginComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
