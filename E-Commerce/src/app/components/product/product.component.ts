import { BackendService } from './../../services/backend.service';
import { product } from './../../interfaces/product';
import { productResponse } from './../../interfaces/productResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRes : productResponse = {
    products: []
  };
  products : Array<product> = [];
  constructor(private backend: BackendService) { }

  ngOnInit(): void {

  }

  getFeaturedProducts(){
    this.backend.get("/products").subscribe(products => {this.productRes = products as productResponse});
    this.products = this.productRes.products;
    console.log(this.productRes);
    console.log(this.products);
    return this.products;
  }

}
