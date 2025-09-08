import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-instrument-list',
  standalone: false,
  templateUrl: './instrument-list.html',
  styleUrl: './instrument-list.css'
})
export class InstrumentList {

  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  ]

}
