import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/view', component: ProfileViewerComponent },
  { path: 'profile/edit', component: ProfileEditorComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ProfileEditorComponent,
    ProfileViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
