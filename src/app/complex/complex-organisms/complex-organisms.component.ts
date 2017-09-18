import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {Facet} from '../shared/model/complex-results/facets/facet.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'cp-complex-organisms',
  templateUrl: './complex-organisms.component.html',
  styleUrls: ['./complex-organisms.component.css']
})
export class ComplexOrganismsComponent implements OnInit, AfterViewInit {
  private _specieFacets: Facet[];
  private _query = 'organisms';

  constructor(private complexPortalService: ComplexPortalService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Organisms');
    this.complexPortalService.getComplexOrganisms().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        switch (result[i].name) {
          case 'Homo sapiens':
            result[i].symbol = 'H';
            result[i].type = 'animal';
            result[i].psi25 = 'Homo_sapiens';
            result[i].psi30 = 'human';
            result[i].complextab = 'homo_sapiens';
            break;
          case 'Mus musculus':
            result[i].symbol = 'M';
            result[i].type = 'animal';
            result[i].psi25 = 'Mus_musculus';
            result[i].psi30 = 'mouse';
            result[i].complextab = 'mus_musculus';
            break;
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
            result[i].symbol = 'Y';
            result[i].type = 'plant';
            result[i].psi25 = 'Saccharomyces_cerevisiae';
            result[i].psi30 = 'yeast';
            result[i].complextab = 'saccharomyces_cerevisiae';
            break;
          case 'Escherichia coli (strain K12)':
            result[i].symbol = 'L';
            result[i].type = 'animal';
            result[i].psi25 = 'Escherichia_coli';
            result[i].psi30 = 'ecoli';
            result[i].complextab = 'escherichia_coli';
            break;
          case 'Rattus norvegicus':
            result[i].symbol = 'R';
            result[i].type = 'animal';
            result[i].psi25 = 'Rattus_norvegicus';
            result[i].psi30 = 'rat';
            result[i].complextab = 'rattus_norvegicus';
            break;
          case 'Caenorhabditis elegans':
            result[i].symbol = 'W';
            result[i].type = 'animal';
            result[i].psi25 = 'Caenorhabditis_elegans';
            result[i].psi30 = 'caeel';
            result[i].complextab = 'caenorhabditis_elegans';
            break;
          case 'Gallus gallus':
            result[i].symbol = 'k';
            result[i].type = 'animal';
            result[i].psi25 = 'Gallus_gallus';
            result[i].psi30 = 'chick';
            result[i].complextab = 'gallus_gallus';
            break;
          case 'Drosophila melanogaster':
            result[i].symbol = 'F';
            result[i].type = 'animal';
            result[i].psi25 = 'Drosophila_melanogaster';
            result[i].psi30 = 'drome';
            result[i].complextab = 'drosophila_melanogaster';
            break;
          case 'Bos taurus':
            result[i].symbol = 'C';
            result[i].type = 'animal';
            result[i].psi25 = 'Bos_taurus';
            result[i].psi30 = 'bovin';
            result[i].complextab = 'bos_taurus';
            break;
          case 'Oryctolagus cuniculus':
            result[i].symbol = 't';
            result[i].type = 'animal';
            result[i].psi25 = 'Oryctolagus_cuniculus';
            result[i].psi30 = 'rabit';
            result[i].complextab = 'oryctolagus_cuniculus';
            break;
          case 'Xenopus laevis':
            result[i].symbol = 'f';
            result[i].type = 'animal';
            result[i].psi25 = 'Xenopus_laevis';
            result[i].psi30 = 'xenla';
            result[i].complextab = 'xenopus_laevis';
            break;
          case 'Canis lupus familiaris':
            result[i].symbol = 'd';
            result[i].type = 'animal';
            result[i].psi25 = 'Canis_familiaris';
            result[i].psi30 = 'canlf';
            result[i].complextab = 'canis_familiaris';
            break;
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
            result[i].symbol = 'Y';
            result[i].type = 'animal';
            result[i].psi25 = 'Schizosaccharomyces_pombe';
            result[i].psi30 = 'schpo';
            result[i].complextab = 'schizosaccharomyces_pombe';
            break;
          case 'Sus scrofa':
            result[i].symbol = 'p';
            result[i].type = 'animal';
            result[i].psi25 = 'Sus_scrofa';
            result[i].psi30 = 'pig';
            result[i].complextab = 'sus_scrofa';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
          '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
            result[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
            result[i].symbol = 'L';
            result[i].type = 'animal';
            result[i].psi25 = 'Pseudomonas_aeruginosa';
            result[i].psi30 = 'pseae';
            result[i].complextab = 'pseudomonas_aeruginosa';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
            result[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
            result[i].symbol = 'L';
            result[i].type = 'animal';
            result[i].psi25 = 'Pseudomonas_aeruginosa';
            result[i].psi30 = 'pseae';
            result[i].complextab = 'pseudomonas_aeruginosa';
            break;
          case 'Torpedo marmorata':
            result[i].symbol = '+';
            result[i].type = 'animal';
            result[i].psi25 = 'Torpedo_marmorata';
            result[i].psi30 = 'torma';
            result[i].complextab = 'torpedo_marmorata';
            break;
          case 'Tetronarce californica':
            result[i].symbol = '+';
            result[i].type = 'animal';
            result[i].psi25 = 'Torpedo_californica';
            result[i].psi30 = 'torca';
            result[i].complextab = 'torpedo_californica';
            break;
          case 'Lymnaea stagnalis':
            result[i].symbol = '\'';
            result[i].type = 'animal';
            result[i].psi25 = 'Lymnaea_stagnalis';
            result[i].psi30 = 'lymst';
            result[i].complextab = 'lymnaea_stagnalis';
            break;
          case 'Arabidopsis thaliana':
            result[i].symbol = 'B';
            result[i].type = 'plant';
            result[i].psi25 = 'arabidopsis_thaliana';
            result[i].psi30 = 'arath';
            result[i].complextab = 'arabidopsis_thaliana';
            break;
          case 'Danio rerio':
            result[i].symbol = 'Z';
            result[i].type = 'animal';
            result[i].psi25 = 'danio_rerio';
            result[i].psi30 = 'danre';
            result[i].complextab = 'danio_rerio';
            break;
          default:
            result[i].symbol = 'x';
            result[i].type = 'none';
            result[i].psi25 = '';
            result[i].psi30 = '';
            result[i].complextab = '';
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
