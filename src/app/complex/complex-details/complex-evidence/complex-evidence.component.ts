import {Component, OnInit, input } from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {ComplexDetails} from '../../shared/model/complex-details/complex-details.model';
import {humapUrl} from '../../complex-portal-utils';

@Component({
  selector: 'cp-complex-evidence',
  templateUrl: './complex-evidence.component.html',
  styleUrls: ['./complex-evidence.component.css']
})
export class ComplexEvidenceComponent implements OnInit {

  private static HUMAP_DB_MI = 'MI:2424';
  private static IDENTITY_MI = 'MI:0356';

  intactXRefs: CrossReference[];
  humapXrefs: CrossReference[];
  complex = input<ComplexDetails>();
  stars: ('empty' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];

  protected readonly humapUrl = humapUrl;

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
      const databaseMi = this.complex().crossReferences[i].dbMI;
      const qualifierMi = this.complex().crossReferences[i].qualifierMI;

      if (database === 'intact') {
        if (this.intactXRefs === undefined) {
          this.intactXRefs = [];
        }
        this.intactXRefs.push(crossRef);
      } else if (databaseMi === ComplexEvidenceComponent.HUMAP_DB_MI && qualifierMi === ComplexEvidenceComponent.IDENTITY_MI) {
        if (this.humapXrefs === undefined) {
          this.humapXrefs = [];
        }
        this.humapXrefs.push(crossRef);
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
