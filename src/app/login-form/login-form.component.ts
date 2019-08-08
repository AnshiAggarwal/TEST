import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({templateUrl: 'login-form.component.html'})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });



    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
//    this.userService.login(this.f.username.value, this.f.password.value)
 //     .pipe(first())
 //     .subscribe(
 //       data => {
 //         this.router.navigate([this.returnUrl]);
 //       });
  }
}
