/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: '[nft-single-card]',
  templateUrl: './nft-single-card.component.html',
})
export class NftSingleCardComponent {
  @Input() nft: Nft = <Nft>{};
}
