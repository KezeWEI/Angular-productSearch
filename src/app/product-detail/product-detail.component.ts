import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public item:any;
  private id:number;
  public newcomment:string="";
  public newstars:number=5;
  public comments:any[]=[];
  public hiddenComment:boolean=true;
  constructor(
    private common:CommonService,
    private routeInfo:ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log(this.routeInfo.snapshot.params);
    this.id=this.routeInfo.snapshot.params.id;
    console.log(this.id);
    this.item=this.common.getById(this.id);
    this.comments=this.common.getCommentsById(this.id);
  }
  addcomment(){
    this.comments.push({id:this.id,stars:this.newstars,date:new Date().toDateString(),name:"someone",commentaire:this.newcomment})
    console.log(this.newstars);
    var a:number=0;
    for(var i=0;i<this.comments.length;i++){
      a=a+this.comments[i].stars;
    }
    this.item.stars=a/this.comments.length;
    this.hiddenComment=!this.hiddenComment;
    this.newstars=0;
    this.newcomment="";
  }

}
