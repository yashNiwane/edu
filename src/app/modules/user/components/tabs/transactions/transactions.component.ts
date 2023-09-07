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

  payments: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 45, 67, 8, 9, 9, 86, 86, 97, 7, 7, 797, 12, 53, 36, 775, 32]; // Replace with your actual payment data
  pageSize: number = 5; // Number of items per page
  currentPage: number = 1;

  get totalItems(): number {
    return this.payments.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get paginatedPayments(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.payments.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }
}
