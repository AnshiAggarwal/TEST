import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import {UserDetailComponent } from './user-detail/user-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';

const appRoutes: Routes = [
  { path: '', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
