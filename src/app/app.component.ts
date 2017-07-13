import { Component, OnInit } from '@angular/core';
import { Product } from "./product/product.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myProduct: Product = new Product();

  constructor() {

  }
  ngOnInit(): void {
    this.myProduct.name = "Tuanph";
    this.myProduct.price = 1500;
    this.myProduct.imageUrl = "";
  }
  title = 'app';
}
