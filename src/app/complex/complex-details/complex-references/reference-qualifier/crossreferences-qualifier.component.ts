import {Component, input} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-crossreferences-qualifier',
  templateUrl: './crossreferences-qualifier.component.html',
  styleUrls: ['./crossreferences-qualifier.component.scss']
})
export class CrossreferencesQualifierComponent {
  crossReference = input<CrossReference>();
}
