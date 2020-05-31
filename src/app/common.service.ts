import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public productlist:any[];
  public comments:any[];
  private keyword:any;
  constructor() { 
    this.productlist=[{
      id:1,
      title:"First product",
      price:15,
      stars:1.5,
      image:"assets/images/1.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },{
      id:2,
      title:"Second product",
      price:25,
      stars:2.5,
      image:"assets/images/2.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },{
      id:3,
      title:"Third product",
      price:35,
      stars:3.5,
      image:"assets/images/3.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },{
      id:4,
      title:"Fourth product",
      price:45,
      stars:4.5,
      image:"assets/images/4.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },{
      id:5,
      title:"Fifth product",
      price:55,
      stars:1.5,
      image:"assets/images/5.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },{
      id:6,
      title:"Sixth product",
      price:65,
      stars:4.5,
      image:"assets/images/6.jpg",
      commentaire:"Good quality, high cost performance, and very useful. The design is very beautiful."
    },];
    this.comments=[{
      id:1,
      stars: 2,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:1,
      stars: 1,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:2,
      stars: 2,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:2,
      stars: 3,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:3,
      stars: 3,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:3,
      stars: 4,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:4,
      stars: 4,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:4,
      stars: 5,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:5,
      stars: 2,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:5,
      stars: 3,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:6,
      stars: 5,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    },
    {
      id:6,
      stars: 4,
      date: "2020-05-27 22：22：22",
      name: "Nino",
      commentaire:"nanani nanana"
    }]
  }
  getProductlist(){
    return this.productlist;
  }
  
  getById(id){
    return this.productlist[id-1];
  }
  getComments(){
    return this.comments;
  }
  getCommentsById(id:number){
    var ids:number=id;  
    var comments:any[]=[];
    for(var i = 0;i<=this.comments.length-1;i++){
      if(this.comments[i].id==ids){
        comments.push(this.comments[i]);
        console.log(comments);
      }
    }
    return comments;
  }
  setkeyword(keyword:any){
    this.keyword=keyword;
  }
  getkeyword(){
    return this.keyword;
  }
}
