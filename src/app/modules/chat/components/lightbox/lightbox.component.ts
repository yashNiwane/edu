import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  @Input() lightboxImage!: string;
  showLightbox: boolean = false;

  openLightbox() {
    this.showLightbox = true;
  }

  closeLightbox() {
    this.showLightbox = false;
  }
}
