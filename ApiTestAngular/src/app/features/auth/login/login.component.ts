import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {

  userId: string = "";
  password: string = "";

  constructor(private router : Router, private toaster : ToastrService){

  }
  // Call your OAuth service here
  loginWith(provider: 'google' | 'github' | 'microsoft') {
    // Implement OAuth sign-in logic, e.g., this.authService.signInWith(provider);
    console.log(`Sign in with ${provider}`);
  }

  loginSimple() {
    if(this.userId === "abul.arafat@gmail.com" && this.password === "1234"){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.toaster.error("Please check your credentials", "Login failed");
    }
  }

  newAccount() {
    this.router.navigate(['/signup']);
  }
}