import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/Filter';

@Pipe({
  name: 'coveragefilter',
})
export class CoveragefilterPipe implements PipeTransform {
  transform(arr: Filter[], filter: string): any {
    return arr.filter((x) => x.major == filter)[0].coverage.sort();
  }
}
