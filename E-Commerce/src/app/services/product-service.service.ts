import { product } from './../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Array<product> = [];
  constructor() { }

  getProducts(){

  }

}
