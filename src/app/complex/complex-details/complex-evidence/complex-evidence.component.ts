import {Component, OnInit, input } from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {ComplexDetails} from '../../shared/model/complex-details/complex-details.model';

@Component({
  selector: 'cp-complex-evidence',
  templateUrl: './complex-evidence.component.html',
  styleUrls: ['./complex-evidence.component.css']
})
export class ComplexEvidenceComponent implements OnInit {

  intactXRefs: CrossReference[];
  complex = input<ComplexDetails>();
  stars: ('empty' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];


  constructor() {
  }

  ngOnInit() {
    this.findXRefs();
    this.formatEvidenceOntologyStars();
  }

  private formatEvidenceOntologyStars(): void {
    this._star(this.complex().evidenceType?.confidenceScore || 3);
  }

  /**
   * TODO: Enrich the object from the response and may introduce a level for the flask symbol.
   * Currently we do not store any further information in the evidence XRef, this is why we need to extend the object here.
   * Also we add the flask symbol, which is for the icon. (Similar to the organism view)
   */
  private findXRefs(): void {
    for (let i = 0; i < this.complex().crossReferences.length; i++) {
      const crossRef = this.complex().crossReferences[i];
      const database = this.complex().crossReferences[i].database;

      if (database === 'intact') {
        if (this.intactXRefs === undefined) {
          this.intactXRefs = [];
        }
        this.intactXRefs.push(crossRef);
      }
    }
  }

  _star(amount: number) {
    this.stars.fill('full');
    if (amount < this.stars.length) {
      this.stars.fill('empty', amount);
    }
  }
}
