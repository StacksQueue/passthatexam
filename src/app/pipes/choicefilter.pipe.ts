import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choicefilter'
})
export class ChoicefilterPipe implements PipeTransform {

  transform(choices: string[], letter: string): string[] {
    return choices.map((choice, ndx) => `${String.fromCharCode(65 + ndx)}. ${choice}`);
  }

}
