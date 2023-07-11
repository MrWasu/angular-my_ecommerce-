import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  product: any = {
    name: '',
    price: 0,
    seller: '',
    brand: '',
    image: '',
    additionalImages: [],
    shippingDetails: '',
    warrantyDetails: ''
  };
  selectedQuantity: number = 1;

  addToCart() {
    // Lógica para agregar el producto al carrito de compras
  }
  buyNow() {
    // Lógica para agregar el producto al carrito de compras
  }
}
