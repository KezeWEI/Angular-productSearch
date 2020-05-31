import { Component, OnInit, Input } from '@angular/core';
import { CommonService} from '../common.service'
import { FormControl } from '@angular/forms';
import { debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  public keyword:any;
  public productlist:any[];
  public titleFilter:FormControl = new FormControl();
  constructor(
    private common:CommonService,
    ) { 
    this.productlist=common.getProductlist();
    // this.titleFilter.valueChanges
    // .pipe(debounceTime(500))
    // .subscribe(
    //   value=>{
    //     this.keyword=value;
    //   }
    // )
      setInterval(()=>{
        this.keyword=this.common.getkeyword();
      },1000)
    
  }
  ngOnInit(): void {
    
  }


}
