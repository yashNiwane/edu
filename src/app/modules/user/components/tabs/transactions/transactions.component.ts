import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  @Input('tabTitle') title!: string;
  @Input('tabIcon') icon!: string;
  @Input() active = false;

}
