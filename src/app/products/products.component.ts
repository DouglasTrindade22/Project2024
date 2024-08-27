import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Products[] = [
   {
    "id": 1,
    "name": "Computador i7",
    "price": 6.000,
    "category": "Eletrônicos",
   },
   {
    "id": 2,
    "name": "Computador i5",
    "price": 5.000,
    "category": "Eletrônicos",
   },
   {
    "id": 1,
    "name": "Mouse",
    "price": 640,
    "category": "Eletrônicos",
   }
  ]
}
