import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
})
export class InteractionComponent {

  constructor(private router: Router) {  
  }

  initiateChat() {
    this.router.navigate(['/chat/interaction/conv/asfksdf']);
  }
}