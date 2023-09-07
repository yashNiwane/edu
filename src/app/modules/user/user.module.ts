import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LightboxModule } from 'ngx-lightbox';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileTabsComponent } from './components/tabs/profile.tabs.component';
import { DetailsComponent } from './components/tabs/details/details.component';
import { TransactionsComponent } from './components/tabs/transactions/transactions.component';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ProfileTabsComponent,   
    TransactionsComponent,   
    DetailsComponent, TransactionsComponent  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    LightboxModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class UserModule { }
