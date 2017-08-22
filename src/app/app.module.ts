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
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes = [
    {path: 'profile', component: ViewProfileComponent},
    {path: 'profile/edit', component: EditProfileComponent, data: {id: 0} },
    {path: 'login', component: LoginComponent},
    {path: '',  redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    ViewProfileComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
