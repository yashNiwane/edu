/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
  passwordTextType = false; // Removed type annotation
  password = ''; // Removed type annotation
  confirmPassword = ''; // Removed type annotation
  passwordsMatch: boolean | undefined;

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    // Check if passwords match
    if (this.password === this.confirmPassword) {
      this.passwordsMatch = true;
      console.log('Passwords matched. Submitting...');
      // You can handle the form submission logic here.
    } else {
      this.passwordsMatch = false;
      console.error('Passwords do not match.');
    }
  }
}
