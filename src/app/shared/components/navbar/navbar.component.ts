import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth/services/auth-service.service';
import { AppComponent } from 'src/app/app.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // componente de test

  constructor(public authService: AuthService) { }

  toggleAuthStatus() {
    this.authService.toggleAuthStatus();
  }

}
