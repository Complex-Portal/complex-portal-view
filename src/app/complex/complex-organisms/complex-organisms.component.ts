import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import {ComplexPortalService} from "../shared/service/complex-portal.service";
import {Facets} from "../shared/model/complex-results/facets.model";
import {Facet} from "../shared/model/complex-results/facets/facet.model";

@Component({
  selector: 'app-complex-organisms',
  templateUrl: './complex-organisms.component.html',
  styleUrls: ['./complex-organisms.component.css']
})
export class ComplexOrganismsComponent implements OnInit, AfterViewInit {
  private specieFacets: Facet[];

  constructor(private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
    this.complexPortalService.getComplexOrganisms().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        switch (res[i].name) {
          case 'Homo sapiens':
            res[i].symbol = 'H';
            res[i].type = 'animal';
            break;
          case 'Mus musculus':
            res[i].symbol = 'M';
            res[i].type = 'animal';
            break;
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
            res[i].symbol = 'Y';
            res[i].type = 'plant';
            break;
          case 'Escherichia coli (strain K12)':
            res[i].symbol = 'L';
            res[i].type = 'animal';
            break;
          case 'Rattus norvegicus':
            res[i].symbol = 'R';
            res[i].type = 'animal';
            break;
          case 'Caenorhabditis elegans':
            res[i].symbol = 'W';
            res[i].type = 'animal';
            break;
          case 'Gallus gallus':
            res[i].symbol = 'k';
            res[i].type = 'animal';
            break;
          case 'Drosophila melanogaster':
            res[i].symbol = 'F';
            res[i].type = 'animal';
            break;
          case 'Bos taurus':
            res[i].symbol = 'C';
            res[i].type = 'animal';
            break;
          case 'Oryctolagus cuniculus':
            res[i].symbol = 't';
            res[i].type = 'animal';
            break;
          case 'Xenopus laevis':
            res[i].symbol = 'f';
            res[i].type = 'animal';
            break;
          case 'Canis lupus familiaris':
            res[i].symbol = 'd';
            res[i].type = 'animal';
            break;
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
            res[i].symbol = 'Y';
            res[i].type = 'animal';
            break;
          case 'Sus scrofa':
            res[i].symbol = 'p';
            res[i].type = 'animal';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
            res[i].symbol = 'L';
            res[i].type = 'animal';
            break;
          case 'Torpedo marmorata':
            res[i].symbol = '+';
            res[i].type = 'animal';
            break;
          case 'Tetronarce californica':
            res[i].symbol = '+';
            res[i].type = 'animal';
          case 'Lymnaea stagnalis':
            res[i].symbol = '\'';
            res[i].type = 'animal';
            break;
          default:
            res[i].symbol = 'x';
            res[i].type = 'none';
        }
      }
      this.specieFacets = res;
    });
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
