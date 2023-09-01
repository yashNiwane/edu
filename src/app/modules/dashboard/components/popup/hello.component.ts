import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'hello',
  templateUrl: './form-content.directive.html',
})
export class HelloComponent {
  num = interval(1000);
}
