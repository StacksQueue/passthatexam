import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/Filter';

@Pipe({
  name: 'majorfilter',
})
export class MajorfilterPipe implements PipeTransform {
  transform(arr: Filter[], filter: string): any {
    return arr
      .filter((x) => x.program == filter)
      .map((y) => y.major)
      .sort();
  }
}
