/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input('tabTitle') title!: string;
  @Input('tabIcon') icon!: string;
  @Input() active = false;

  isEditOpen = true;

  toggleForm() {
    this.isEditOpen = !this.isEditOpen;
  }
}
