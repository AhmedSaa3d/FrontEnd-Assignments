import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: any): any {
    return value.split("").reverse().join("");
  }

}
