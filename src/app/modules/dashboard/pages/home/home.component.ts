import { Component } from '@angular/core';
import { Nft } from '../../models/nft';
import { DialogComponent } from '../../components/popup/dialog.component';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from '@angular/router';


@Component({
  selector: 'app-nft',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nft: Array<Nft>;

  save(data: any, dialog: DialogComponent) {
    this.router.navigate(['/chat/interaction']);
  }

  cancel(dialog: DialogComponent) {
    dialog.close();
  }

  constructor(private router: Router) {    // private activeRoute: ActivatedRoute) {
    // this.router = router;
    this.nft = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  openPopularChat() {
    this.router.navigate(['/chat/interaction']);
  }
}
