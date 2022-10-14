import { BackendService } from './../../services/backend.service';
import { product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Array<product> = [];
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.get("/products").subscribe(products => {this.products = products as Array<product>});
  }

  getFeaturedProducts(){
    return this.products;
  }

}
