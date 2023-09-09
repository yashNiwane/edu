import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent {
  paymentSteps = 0;

  minValue = 0;
  maxValue = 100;
  rangeValues: number[] = [25, 75];
  rulerMarks: number[] = Array.from({ length: 10 }, (_, i) => i * 10);

  getBubblePosition(slider: HTMLInputElement): number {
    const thumbSize = 5; // Adjust this based on your thumb size
    const percent = ((+slider.value - +slider.min) / (+slider.max - +slider.min)) * 98;
    return percent - thumbSize / 2;
  }

  moveNext() {
    if (this.paymentSteps == 0) this.paymentSteps = this.paymentSteps + 1;
  }

  moveBack() {
    if (this.paymentSteps == 1 || this.paymentSteps == 2) this.paymentSteps = this.paymentSteps - 1;
  }

  moveFinish() {
    if (this.paymentSteps == 1) this.paymentSteps = this.paymentSteps + 1;
  }
}
