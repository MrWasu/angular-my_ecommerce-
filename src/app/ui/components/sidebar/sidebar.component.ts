import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem {
  name: string;
  route: string;
}


@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/auth', name: 'Auth' },
    { route: '/checkout', name: 'Checkout' },
    { route: '/payment', name: 'Payment' },
    { route: '/shop', name: 'Shop' },
    { route: '/user-panel', name: 'User Panel' }
  ];

}
