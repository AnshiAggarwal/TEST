import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UserService} from './user.service';
import { routing } from './app.routing';
import { AuthGuard} from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
