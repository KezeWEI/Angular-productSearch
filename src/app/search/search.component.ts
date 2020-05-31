import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { debounceTime} from 'rxjs/operators';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private formModel:FormGroup;
  public list:any[]=["Furniture", "Electronics","Food","Book","Clothing"];
  public titleFilter:FormControl= new FormControl();
  public keyword:any;
  constructor( private service:CommonService) { 
    this.titleFilter.valueChanges
    .pipe(debounceTime(500))
    .subscribe((value:any)=>{
      this.keyword = value;
      console.log(this.keyword);
      service.setkeyword(this.keyword);
    }
    );
    // let fb = new FormBuilder();
    // this.formModel = fb.group({
    //   //Three search contents
    //   title: ['',Validators.minLength(3)],
    //   price:[null,this.postiveNumberValidater],
    //   category:['-1']
    // })
    
  }
  // postiveNumberValidater(control:FormControl):any{
  //   if(!control.value){
  //     return null;
  //   }
  //   let price = parseInt(control.value);
  //   if(price>0){
  //     return null;
  //   }else{
  //     return {postiveNumber:true}
  //   }
  //  }
  ngOnInit(): void {
  }

}
