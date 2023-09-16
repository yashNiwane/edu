import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../../services/menu.service';
import { Router } from 'express';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
})
export class NavbarMobileComponent {
  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();
  router: any;

  constructor(private menuService: MenuService) {
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }

 
  logout() {
    const confirmation  = confirm('Do you want to logout');
    if (confirmation == true){
   this.router.navigate(['login'])
  }
}
}
