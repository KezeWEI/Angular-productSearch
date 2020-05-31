import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:any[],filterfield: string, keyword: string): any {
    if(!filterfield||!keyword){
      return list;
    }
    return list.filter(
      item=>{
        let filedvalue = item[filterfield];
        return filedvalue.indexOf(keyword)>=0;
      }
    )
  }

}
