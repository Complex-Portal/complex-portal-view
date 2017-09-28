import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {Title} from '@angular/platform-browser';
import {SpeciesFacet} from '../shared/model/complex-results/facets/species_f.model';
import {ComplexOrganisms} from '../shared/model/complex-organism/complex-organism.model';

@Component({
  selector: 'cp-complex-organisms',
  templateUrl: './complex-organisms.component.html',
  styleUrls: ['./complex-organisms.component.css']
})
export class ComplexOrganismsComponent implements OnInit, AfterViewInit {
  private _organisms: ComplexOrganisms[];
  private _query = 'organisms';

  constructor(private complexPortalService: ComplexPortalService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Organisms');
    //TODO: This needs to be looked at, once ftp and WS are able to take care of this.
    //TODO: When new species in CP, we need to add it here to at the image.
    //TODO: Currently we the organism name and count from species facets doing a * search. The ComplexOrganisms object extends the facet object.
    this.complexPortalService.getComplexOrganisms().subscribe((speciesFacets: SpeciesFacet[]) => {
      const organisms: ComplexOrganisms[] = <ComplexOrganisms[]> speciesFacets;
      for (let i = 0; i < organisms.length; i++) {
        switch (organisms[i].name) {
          case 'Homo sapiens':
            organisms[i].symbol = 'H';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Homo_sapiens';
            organisms[i].psi30 = 'human';
            organisms[i].complextab = 'homo_sapiens';
            break;
          case 'Mus musculus':
            organisms[i].symbol = 'M';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Mus_musculus';
            organisms[i].psi30 = 'mouse';
            organisms[i].complextab = 'mus_musculus';
            break;
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
            organisms[i].symbol = 'Y';
            organisms[i].type = 'plant';
            organisms[i].psi25 = 'Saccharomyces_cerevisiae';
            organisms[i].psi30 = 'yeast';
            organisms[i].complextab = 'saccharomyces_cerevisiae';
            break;
          case 'Escherichia coli (strain K12)':
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Escherichia_coli';
            organisms[i].psi30 = 'ecoli';
            organisms[i].complextab = 'escherichia_coli';
            break;
          case 'Rattus norvegicus':
            organisms[i].symbol = 'R';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Rattus_norvegicus';
            organisms[i].psi30 = 'rat';
            organisms[i].complextab = 'rattus_norvegicus';
            break;
          case 'Caenorhabditis elegans':
            organisms[i].symbol = 'W';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Caenorhabditis_elegans';
            organisms[i].psi30 = 'caeel';
            organisms[i].complextab = 'caenorhabditis_elegans';
            break;
          case 'Gallus gallus':
            organisms[i].symbol = 'k';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Gallus_gallus';
            organisms[i].psi30 = 'chick';
            organisms[i].complextab = 'gallus_gallus';
            break;
          case 'Drosophila melanogaster':
            organisms[i].symbol = 'F';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Drosophila_melanogaster';
            organisms[i].psi30 = 'drome';
            organisms[i].complextab = 'drosophila_melanogaster';
            break;
          case 'Bos taurus':
            organisms[i].symbol = 'C';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Bos_taurus';
            organisms[i].psi30 = 'bovin';
            organisms[i].complextab = 'bos_taurus';
            break;
          case 'Oryctolagus cuniculus':
            organisms[i].symbol = 't';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Oryctolagus_cuniculus';
            organisms[i].psi30 = 'rabit';
            organisms[i].complextab = 'oryctolagus_cuniculus';
            break;
          case 'Xenopus laevis':
            organisms[i].symbol = 'f';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Xenopus_laevis';
            organisms[i].psi30 = 'xenla';
            organisms[i].complextab = 'xenopus_laevis';
            break;
          case 'Canis lupus familiaris':
            organisms[i].symbol = 'd';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Canis_familiaris';
            organisms[i].psi30 = 'canlf';
            organisms[i].complextab = 'canis_familiaris';
            break;
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
            organisms[i].symbol = 'Y';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Schizosaccharomyces_pombe';
            organisms[i].psi30 = 'schpo';
            organisms[i].complextab = 'schizosaccharomyces_pombe';
            break;
          case 'Sus scrofa':
            organisms[i].symbol = 'p';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Sus_scrofa';
            organisms[i].psi30 = 'pig';
            organisms[i].complextab = 'sus_scrofa';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
          '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
            organisms[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Pseudomonas_aeruginosa';
            organisms[i].psi30 = 'pseae';
            organisms[i].complextab = 'pseudomonas_aeruginosa';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228)':
            organisms[i].name = 'Pseudomonas aeruginosa (strain ATCC 15692)';
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Pseudomonas_aeruginosa';
            organisms[i].psi30 = 'pseae';
            organisms[i].complextab = 'pseudomonas_aeruginosa';
            break;
          case 'Torpedo marmorata':
            organisms[i].symbol = '+';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Torpedo_marmorata';
            organisms[i].psi30 = 'torma';
            organisms[i].complextab = 'torpedo_marmorata';
            break;
          case 'Tetronarce californica':
            organisms[i].symbol = '+';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Torpedo_californica';
            organisms[i].psi30 = 'torca';
            organisms[i].complextab = 'torpedo_californica';
            break;
          case 'Lymnaea stagnalis':
            organisms[i].symbol = '\'';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Lymnaea_stagnalis';
            organisms[i].psi30 = 'lymst';
            organisms[i].complextab = 'lymnaea_stagnalis';
            break;
          case 'Arabidopsis thaliana':
            organisms[i].symbol = 'B';
            organisms[i].type = 'plant';
            organisms[i].psi25 = 'arabidopsis_thaliana';
            organisms[i].psi30 = 'arath';
            organisms[i].complextab = 'arabidopsis_thaliana';
            break;
          case 'Danio rerio':
            organisms[i].symbol = 'Z';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'danio_rerio';
            organisms[i].psi30 = 'danre';
            organisms[i].complextab = 'danio_rerio';
            break;
          default:
            organisms[i].symbol = 'x';
            organisms[i].type = 'none';
            organisms[i].psi25 = '';
            organisms[i].psi30 = '';
            organisms[i].complextab = '';
        }
      }
      this._organisms = organisms;
    });
  }


  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  get organisms(): ComplexOrganisms[] {
    return this._organisms;
  }


  get query(): string {
    return this._query;
  }
}
