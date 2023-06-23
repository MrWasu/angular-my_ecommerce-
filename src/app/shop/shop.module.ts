import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';
import { FooterComponent } from '../ui/components/footer/footer.component';
import { HeaderComponent } from '../ui/components/header/header.component';
import { NavbarComponent } from '../ui/components/navbar/navbar.component';


@NgModule({
  declarations: [
    ShopPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class ShopModule { }
