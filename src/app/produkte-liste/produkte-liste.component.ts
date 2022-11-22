import { Component, OnInit } from '@angular/core';

import { gql,Apollo } from 'apollo-angular';
import { product } from '../models/product';

// const GetProducts= gql `  query {
//   product{
//     anwendungsBereich
//     untergrund
//     deckkraft
//     farbton
//     path
//   }
// }`;

@Component({
  selector: 'app-produkte-liste',
  templateUrl: './produkte-liste.component.html',
  styleUrls: ['./produkte-liste.component.css']
})
export class ProdukteListeComponent implements OnInit {
  // allProducts :product[]=[];
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // constructor(private apollo : Apollo) { }

  // ngOnInit(): void {
  //   this.apollo.watchQuery<any> ({query :GetProducts}).valueChanges.subscribe(({data,loading}) => {
  //     console.log(loading);
  //     this.allProducts=data.product;
  //   }
  //   )
  // }
}
