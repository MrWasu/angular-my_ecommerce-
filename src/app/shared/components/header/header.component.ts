import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.service';
import { CartService } from '../../pages/services/cart.service';
import { WishlistService } from '../../pages/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  cartCount = 0;
  wishCount = 0;
  sticky: boolean = false;
  loggedIn: boolean = false;
  constructor
    (
      private _cartService: CartService,
      private _auth: AuthService,
      private _wishlistService: WishlistService,
    ) { }

  // detecta el evento de desplazamiento en la ventana y establece la propiedad "sticky"
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 300) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  // actualiza el conteo de elementos del carrito y de la lista de deseos, verifica el inicio de sesión y muestra el estado de inicio de sesión.
  ngOnInit(): void {
    this._cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length ?? 0;
    });
    this._wishlistService.wishList$.subscribe((wishList) => {
      this.wishCount = wishList?.items?.length ?? 0;
    });
    this.loggedIn = this._auth.loggedIn();
    console.log(this.loggedIn)
  }

}