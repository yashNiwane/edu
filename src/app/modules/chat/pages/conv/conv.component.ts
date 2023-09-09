/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-interaction',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.scss'],
})
export class ConvComponent {
  code = ``;

  _albums: any = [];

  constructor(private _lightbox: Lightbox, private sanitizer: DomSanitizer) {

    this._albums = [
      {
        src: sanitizer.bypassSecurityTrustResourceUrl("https://picsum.photos/600/400/?random"),
        caption: "Image 1",
        type: true
      },
      {
        src: sanitizer.bypassSecurityTrustResourceUrl("https://picsum.photos/600/400/?random"),
        caption: "Image 1",
        type: true
      },
      {
        src: sanitizer.bypassSecurityTrustResourceUrl("https://picsum.photos/600/400/?random"),
        caption: "Image 1",
        type: true
      },
      {
        src: sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0LhBvp8qpro?si=jmeElQ2e3g0DoLW4".replace("watch?v=", "v/")),
        caption: "Video 1",
        type: false
      },
      {
        src: sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0LhBvp8qpro?si=jmeElQ2e3g0DoLW4".replace("watch?v=", "v/")),
        caption: "Video 2",
        type: false
      }
    ];
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}