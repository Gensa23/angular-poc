import { AuthenticationGuard } from './authentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ViewProfileComponent} from './profile/view-profile.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: 'profile', component: ViewProfileComponent, canActivate: [AuthenticationGuard]},
    {path: 'profile/edit', component: EditProfileComponent, canActivate: [AuthenticationGuard]},
    {path: 'login', component: LoginComponent},
    {path: '',  redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
