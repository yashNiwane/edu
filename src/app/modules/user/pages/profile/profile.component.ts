/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interaction',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  constructor(private router: Router) {  
  }
  initiateChat() {
    this.router.navigate(['/chat/interaction/conv/asfksdf']);
  }
}