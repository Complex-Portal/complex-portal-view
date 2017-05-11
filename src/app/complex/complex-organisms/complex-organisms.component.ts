import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import {ComplexPortalService} from "../shared/service/complex-portal.service";
import {Facet} from "../shared/model/complex-results/facets/facet.model";

@Component({
  selector: 'cp-complex-organisms',
  templateUrl: './complex-organisms.component.html',
  styleUrls: ['./complex-organisms.component.css']
})
export class ComplexOrganismsComponent implements OnInit, AfterViewInit {
  private _specieFacets: Facet[];
  private _query = 'organisms';

  constructor(private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
    this.complexPortalService.getComplexOrganisms().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        switch (result[i].name) {
          case 'Homo sapiens':
            result[i].symbol = 'H';
            result[i].type = 'animal';
            break;
          case 'Mus musculus':
            result[i].symbol = 'M';
            result[i].type = 'animal';
            break;
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
            result[i].symbol = 'Y';
            result[i].type = 'plant';
            break;
          case 'Escherichia coli (strain K12)':
            result[i].symbol = 'L';
            result[i].type = 'animal';
            break;
          case 'Rattus norvegicus':
            result[i].symbol = 'R';
            result[i].type = 'animal';
            break;
          case 'Caenorhabditis elegans':
            result[i].symbol = 'W';
            result[i].type = 'animal';
            break;
          case 'Gallus gallus':
            result[i].symbol = 'k';
            result[i].type = 'animal';
            break;
          case 'Drosophila melanogaster':
            result[i].symbol = 'F';
            result[i].type = 'animal';
            break;
          case 'Bos taurus':
            result[i].symbol = 'C';
            result[i].type = 'animal';
            break;
          case 'Oryctolagus cuniculus':
            result[i].symbol = 't';
            result[i].type = 'animal';
            break;
          case 'Xenopus laevis':
            result[i].symbol = 'f';
            result[i].type = 'animal';
            break;
          case 'Canis lupus familiaris':
            result[i].symbol = 'd';
            result[i].type = 'animal';
            break;
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
            result[i].symbol = 'Y';
            result[i].type = 'animal';
            break;
          case 'Sus scrofa':
            result[i].symbol = 'p';
            result[i].type = 'animal';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
            result[i].symbol = 'L';
            result[i].type = 'animal';
            break;
          case 'Torpedo marmorata':
            result[i].symbol = '+';
            result[i].type = 'animal';
            break;
          case 'Tetronarce californica':
            result[i].symbol = '+';
            result[i].type = 'animal';
            break;
          case 'Lymnaea stagnalis':
            result[i].symbol = '\'';
            result[i].type = 'animal';
            break;
          default:
            result[i].symbol = 'x';
            result[i].type = 'none';
        }
      }
      this._specieFacets = result;
    });
  }


  get specieFacets(): Facet[] {
    return this._specieFacets;
  }

  get query(): string {
    return this._query;
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
