import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email: string = ''; // Declare the email variable with a type

  onSubmit() {
    // You can handle the form submission logic here, e.g., sending a reset password email.
    console.log('Email submitted:', this.email);
  }
}
