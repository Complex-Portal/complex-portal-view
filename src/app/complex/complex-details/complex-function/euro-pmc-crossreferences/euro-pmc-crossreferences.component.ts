import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";
import {EuroPmcService} from "./service/euro-pmc.service";


interface Publication {
  id: string;
  title: string;
  authors: string;
  url: string;
}

@Component({
  selector: 'app-euro-pmc-crossreferences',
  templateUrl: './euro-pmc-crossreferences.component.html',
  styleUrls: ['./euro-pmc-crossreferences.component.css']
})

export class EuroPmcCrossreferencesComponent implements OnInit {

  private _crossReferences: CrossReference[];
  private _publications: Publication[] = [];
  private _isDataLoaded: boolean = false;


  constructor(private euroPmcService: EuroPmcService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      this.euroPmcService.getPublicationInformation(this.crossReferences[i].identifier).subscribe(
        euroPmcResponse => this.publicationFactory(this.crossReferences[i], euroPmcResponse));
      if(i === this.crossReferences.length-1){
        this._isDataLoaded = true;
      }
    }
  }

  private publicationFactory(crossReference: CrossReference, euroPmcResponse: any): void {
    this.publications.push({
      id: crossReference.identifier,
      title: euroPmcResponse.resultList.result[0].title,
      authors: euroPmcResponse.resultList.result[0].authorString,
      url: crossReference.searchURL
    });
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get publications(): Publication[] {
    return this._publications;
  }

  set publications(value: Publication[]) {
    this._publications = value;
  }

  get isDataLoaded(): boolean {
    return this._isDataLoaded;
  }

  set isDataLoaded(value: boolean) {
    this._isDataLoaded = value;
  }
}
