import {Component, Input, OnInit} from '@angular/core';
import {Interactor} from '../../../../../shared/model/complex-results/interactor.model';
import {EnrichedInteractor} from '../table-interactor-column.component';

@Component({
  selector: 'cp-table-interactor-name',
  templateUrl: './table-interactor-name.component.html',
  styleUrls: ['./table-interactor-name.component.css']
})
export class TableInteractorNameComponent implements OnInit {

  @Input() interactorName: string;
  @Input() interactorType: string;
  @Input() interactorId: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public interactorTypeIcon(): string {
    switch (this.interactorType) {
      case 'small molecule':
        return 'icon icon-conceptual icon-chemical';
      case 'protein':
      case 'peptide':
        return 'icon icon-conceptual icon-structures-3d';
      case 'stable complex':
        return 'icon icon-conceptual icon-systems';
      case 'molecule set':
        return 'icon icon-generic icon-math';
      case 'single stranded deoxyribonucleic acid':
      case 'double stranded deoxyribonucleic acid':
      case 'small nuclear rna':
      case 'small nucleolar rna':
      case 'ribosomal rna':
      case 'messenger rna':
      case 'transfer rna':
      case 'signal recognition particle rna':
      case 'ribonucleic acid':
      case 'nucleic acid':
      case 'long non-coding ribonucleic acid':
        return 'icon icon-conceptual icon-dna';
    }
  }

}
