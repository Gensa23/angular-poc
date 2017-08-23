import { MaterialModule } from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {EditProfileComponent} from './profile/profile.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ViewProfileComponent} from './profile/view-profile.component';
import {LoginComponent} from './login/login.component';
import {MdIconModule, MdTabNav} from "@angular/material";

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
    MaterialModule
    // RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
