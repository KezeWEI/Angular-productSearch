import { Component, OnInit, Input, Output, EventEmitter,  OnChanges } from '@angular/core';
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  public stars:number=0;
  @Output() 
  private starsChange:EventEmitter<number> = new EventEmitter();

  @Input()
  private readonly:boolean=true;

  
  public number:boolean[]=[];
  
  constructor() { 
  
  }

  ngOnInit(): void {
    for(let i=1;i<=5;i++){
      this.number[i-1]=(i <= this.stars);
    }
  }
  ngOnChanges():void{
    for(let i=1;i<=5;i++){
      this.number[i-1]=(i <= this.stars);
    }
  }
  clickstar(i:number){
    if(!this.readonly){
      this.stars=i+1;
    //refresh 
    this.ngOnInit();
    this.starsChange.emit(this.stars);
    }
  }
}
