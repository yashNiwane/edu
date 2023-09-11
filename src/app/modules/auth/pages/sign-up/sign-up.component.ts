import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType = false;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmation: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    const { name, email, password, confirmation } = this.form.value;

    if (password !== confirmation) {
      // Add custom validation for password and confirmation
      this.form.get('confirmation')?.setErrors({ 'passwordMismatch': true });
      return;
    }

    // Your submission logic here

    this._router.navigate(['/']);
  }
}
