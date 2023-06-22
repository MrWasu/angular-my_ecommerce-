import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChekoutPageComponent } from './pages/chekout-page/chekout-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';





@NgModule({
  declarations: [
    ChekoutPageComponent
  ],
  imports: [
    SideMenuComponent,
    CommonModule
  ]
})
export class CheckoutModule { }
