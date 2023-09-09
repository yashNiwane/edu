/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: '[nft-dual-card]',
  templateUrl: './nft-dual-card.component.html',
})
export class NftDualCardComponent {
  @Input() nft: Nft = <Nft>{};
}
