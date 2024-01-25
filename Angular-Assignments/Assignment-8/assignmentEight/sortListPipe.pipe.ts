import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortListPipe',
  pure: false
})
export class SortListPipePipe implements PipeTransform {

  transform(arr: any): any {
    if(arr.length === 0){
      return [];
    }
    let newArr = arr.sort((a, b)=> {
      return a.name < b.name
        ? -1
        : a.name > b.name
        ? 1
        : 0;
    });
    return newArr;
  }

}
