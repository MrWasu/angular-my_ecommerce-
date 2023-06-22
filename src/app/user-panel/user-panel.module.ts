import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelPageComponent } from './pages/user-panel-page/user-panel-page.component';
import { SideMenuComponent } from '../ui/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    UserPanelPageComponent
  ],
  imports: [
    CommonModule,
    SideMenuComponent
  ]
})
export class UserPanelModule { }
