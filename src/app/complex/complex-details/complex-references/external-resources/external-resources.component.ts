import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.css']
})
export class ExternalResourcesComponent implements OnInit {
  private _crossReferences: CrossReference[];


  constructor() {
  }

  ngOnInit() {
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  humapUrl(xref: CrossReference): string {
    return 'https://humap3.proteincomplexes.org/displayComplexes?complex_key=' + xref.identifier;
  }
}
