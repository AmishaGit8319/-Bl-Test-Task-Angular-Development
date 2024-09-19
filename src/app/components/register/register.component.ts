import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, 
    private router: Router,
    private CommonService :CommonService,) {
      this.CommonService.setNavTittleAndMenu("Register");
    }

  register(form: NgForm) {
    if(form.valid) {
      if (this.authService.register(this.username, this.password)) {
        this.router.navigate(['/login']);
      } else {
        alert('User already exists');
      }
    } else {
      form.controls['username'].markAsTouched();
      form.controls['password'].markAsTouched();
    }
  }

}
