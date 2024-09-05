import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'species',
  pure: true,
  standalone: true,
})
export class SpeciesPipe implements PipeTransform {
  exceptions = new Map<string, string>([
    ['chemical synthesis; -2', 'Chemical Synthesis'],
    ['Severe acute respiratory syndrome coronavirus', 'SARS-CoV'],
    ['Severe acute respiratory syndrome coronavirus 2', 'SARS-CoV-2'],
    ['Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)', 'MERS-CoV'],
  ]);

  transform(value: string, short = false): string {
    const words = value.replace(';', '').split(' ');
    return this.exceptions.get(value) || (
      short ?
        words[0].charAt(0) + '. ' + words[1] :
        words.slice(0, 2).join(' ')
    );
  }

}
