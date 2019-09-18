import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import {ProductsService} from '../products.service';



// export interface Product{
//   ProductName: string;
//   ProductDescription: string;
//   ProductPrice: number;
// };
 
@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[] ;
  displayedColumns: string[] = ['ProductName', 'ProductDescription', 'ProductPrice', 'Actions'];
  

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }
}






