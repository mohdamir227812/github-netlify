import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterP'
})
export class FilterPPipe implements PipeTransform {

  transform(value: any, searchbox: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search:any){
      return search.email.toLowerCase().indexOf(searchbox.toLowerCase()) > -1
    })
  }

}
