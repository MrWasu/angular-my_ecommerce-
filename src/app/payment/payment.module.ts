import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent
  ]
})
export class PaymentModule { }
