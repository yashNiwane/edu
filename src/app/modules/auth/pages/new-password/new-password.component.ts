import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  passwordTextType!: boolean;
  constructor() {}

  ngOnInit(): void {}

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
