import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private menuService: MenuService) {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
