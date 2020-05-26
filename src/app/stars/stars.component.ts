import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input()
  public stars:number=0;

  public number:boolean[]=[];
  
  constructor() { 
  
  }

  ngOnInit(): void {
    for(let i=1;i<=5;i++){
      this.number.push(i < this.stars);
    }

  }

}
