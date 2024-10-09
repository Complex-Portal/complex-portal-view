import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {humapSearchUrl} from '../../../complex-portal-utils';

@Component({
  selector: 'cp-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.scss']
})
export class ExternalResourcesComponent implements OnInit {
  private _crossReferences: CrossReference[];

  protected readonly humapSearchUrl = humapSearchUrl;

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
}
