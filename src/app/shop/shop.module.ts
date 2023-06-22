import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ShopPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent
  ]
})
export class ShopModule { }
