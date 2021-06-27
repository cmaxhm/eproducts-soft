import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public invalidLogin: boolean;
  private admin: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.invalidLogin = false;
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    localStorage.setItem('admin', JSON.stringify({ username: 'admin', password: 'admin' }));

    this.admin = JSON.parse(localStorage.getItem('admin')!);
  }

  login() {
    if (this.form.controls.username.value === this.admin.username &&
      this.form.controls.password.value === this.admin.password) {
      this.router.navigate(['administracion']);
    } else {
      this.invalidLogin = true;
    }
  }

}
