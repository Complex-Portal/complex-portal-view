import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {OlsService} from '../../../../shared/service/ols/ols.service';

@Component({
  selector: 'app-efo-crossreferences',
  templateUrl: './efo-crossreferences.component.html',
  styleUrls: ['./efo-crossreferences.component.css']
})
export class EfoCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];

  constructor(private olsService: OlsService) {
  }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      this.olsService.getEfoName(this.crossReferences[i].identifier).subscribe(
        response => this._crossReferences[i].description = JSON.parse(response._body)._embedded.terms[0].label);
    }
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }
}
