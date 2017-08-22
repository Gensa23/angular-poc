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
import 'hammerjs';
import {
  MdButtonModule, MdCardModule, MdInputModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    MdToolbarModule,
    MdMenuModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
