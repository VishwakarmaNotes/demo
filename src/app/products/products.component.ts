import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayItems: any;
  constructor() { }

  ngOnInit(): void {
     this.displayItems = [
      { img: "assets/images/cheese.jpg",Name: "Cheese", price : 2.50, Location: "Refrigerated foods", qty: 2},
      { img: "assets/images/crisps.jfif",Name: "Crisps", price : 3, Location: "the Snack isle", qty: 5},
      { img: "assets/images/pizza.jfif",Name: "pizza", price : 4, Location: "Refrigerated foods", qty: 7 },
      { img: "assets/images/chocolate.jfif",Name: "Chocolate", price : 1.50, Location: "the Snack isle", qty: 8 },
      { img: "assets/images/floor.jfif",Name: "Self-raising flour", price : 1.50, Location: "Home baking", qty: 0 },
      { img: "assets/images/almonds.jfif",Name: "Ground almonds", price : 3, Location: "Home baking", qty: 1 }
      ]
  }

}
