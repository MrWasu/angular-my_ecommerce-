import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

import { FooterComponent } from '../ui/components/footer/footer.component';
import { HeaderComponent } from '../ui/components/header/header.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';
import { NavbarComponent } from '../ui/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    NavbarComponent,
    FormsModule
  ]
})
export class ProductModule { }
