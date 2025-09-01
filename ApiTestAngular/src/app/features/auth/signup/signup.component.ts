import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formData: SignupForm = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if (this.formData.password !== this.formData.confirmPassword) {
      this.toastr.error('Passwords do not match');
      return;
    }

    if (!this.formData.acceptTerms) {
      this.toastr.error('Please accept the terms and conditions');
      return;
    }

    // Here you would typically call your auth service
    console.log('Sign up data:', this.formData);
    this.toastr.success('Account created successfully!');
    this.router.navigate(['/login']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}