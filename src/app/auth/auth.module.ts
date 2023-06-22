import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './page/auth-page/auth-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent
  ]
})
export class AuthModule { }
