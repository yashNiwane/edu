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

  isEditOpen: boolean = true;

  toggleForm() {
    this.isEditOpen = !this.isEditOpen;
  }
}
