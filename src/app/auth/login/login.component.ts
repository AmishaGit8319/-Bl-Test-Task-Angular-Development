import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private CommonService: CommonService
  ) {
    this.CommonService.setNavTittleAndMenu('Split Wise App');
  }

  login(form: NgForm) {
    if (form.valid) {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/groups']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      form.controls['username'].markAsTouched();
      form.controls['password'].markAsTouched();
    }
  }
}
