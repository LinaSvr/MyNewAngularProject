import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //products = Products;
}

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
