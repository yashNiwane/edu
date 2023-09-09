/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: '[nft-auctions-table-item]',
  templateUrl: './nft-auctions-table-item.component.html',
})
export class NftAuctionsTableItemComponent {
  @Input() auction = <Nft>{};
}
