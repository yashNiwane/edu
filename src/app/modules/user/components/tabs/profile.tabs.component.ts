/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
  selector: 'profile-tabs',
  templateUrl: './profile.tabs.component.html',
  styleUrls: ['./profile.tabs.component.scss']
})
export class ProfileTabsComponent implements AfterContentInit{
 

  @ContentChildren(DetailsComponent) tab1s!: QueryList<DetailsComponent>;
  @ContentChildren(TransactionsComponent) tab2s!: QueryList<TransactionsComponent>;

  tabs: (DetailsComponent | TransactionsComponent)[] = [];

  ngAfterContentInit() {
    // Combine Tab1Components and Tab2Components into a single array
    this.tabs = [...this.tab1s.toArray(), ...this.tab2s.toArray()];

    // Get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // If there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs[0]);
    }
  }

  selectTab(tab: DetailsComponent | TransactionsComponent) {
    // Deactivate all tabs
    this.tabs.forEach((t) => (t.active = false));

    // Activate the tab the user has clicked on
    tab.active = true;
  }
 
  // @ContentChildren(DetailsComponent) tabs!: QueryList<any>;
  
  // // contentChildren are set
  // ngAfterContentInit() {
  //   // get all active tabs
  //   let activeTabs = this.tabs.filter((tab:any)=>tab.active);
    
  //   // if there is no active tab set, activate the first
  //   if(activeTabs.length === 0) {
  //     this.selectTab(this.tabs.first);
  //   }
  // }
  
  // selectTab(tab: any){
  //   // deactivate all tabs
  //   this.tabs.toArray().forEach(tab => tab.active = false);
    
  //   // activate the tab the user has clicked on.
  //   tab.active = true;
  // }
}
