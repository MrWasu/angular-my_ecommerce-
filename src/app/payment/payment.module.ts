import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';
import { NavbarComponent } from '../ui/components/navbar/navbar.component';
import { FooterComponent } from '../ui/components/footer/footer.component';
import { HeaderComponent } from '../ui/components/header/header.component';



@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class PaymentModule { }
