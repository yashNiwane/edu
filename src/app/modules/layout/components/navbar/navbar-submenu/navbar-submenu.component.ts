/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/core/models/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss'],
})
export class NavbarSubmenuComponent{
  @Input() public submenu = <SubMenuItem[]>{};
}