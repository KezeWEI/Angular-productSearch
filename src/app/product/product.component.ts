import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productlist:any[];
  constructor() { 
    this.productlist=[{
      id:1,
      title:"First product",
      price:15,
      stars:1.5,
      image:"assets/images/1.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },{
      id:2,
      title:"Second product",
      price:25,
      stars:2.5,
      image:"assets/images/2.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },{
      id:3,
      title:"Third product",
      price:35,
      stars:3.5,
      image:"assets/images/3.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },{
      id:4,
      title:"Fourth product",
      price:45,
      stars:4.5,
      image:"assets/images/4.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },{
      id:5,
      title:"Fifth product",
      price:55,
      stars:1.5,
      image:"assets/images/5.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },{
      id:6,
      title:"Sixth product",
      price:65,
      stars:4.5,
      image:"assets/images/6.jpg",
      commentaire:"Good quality, high cost performance, and very useful."
    },]
  }

  ngOnInit(): void {
  }

}
