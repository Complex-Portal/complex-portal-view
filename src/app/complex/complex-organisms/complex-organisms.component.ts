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
    this.requestComplexOrganisms();
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  private requestComplexOrganisms() {
    // TODO: This needs to be looked at, once ftp and WS are able to take care of this.
    // TODO: When new species in CP, we need to add it here to at the image.
    // TODO: Currently we the organism name and count from species facets doing a * search.
    // TODO: The ComplexOrganisms object extends the facet object.
    this.complexPortalService.getComplexOrganisms().subscribe((speciesFacets: SpeciesFacet[]) => {
      const organisms: ComplexOrganisms[] = <ComplexOrganisms[]> speciesFacets;
      for (let i = 0; i < organisms.length; i++) {
        switch (organisms[i].name) {
          case 'Homo sapiens':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'H';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Homo_sapiens';
            organisms[i].psi30 = 'human';
            organisms[i].complextab = '9606';
            organisms[i].taxid = '9606';
            break;
          case 'Mus musculus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'M';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Mus_musculus';
            organisms[i].psi30 = 'mouse';
            organisms[i].complextab = '10090';
            organisms[i].taxid = '10090';
            break;
          case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
            organisms[i].scientificName = 'Saccharomyces cerevisiae';
            organisms[i].nameDetails = 'strain ATCC 204508 / S288c';
            organisms[i].symbol = 'Y';
            organisms[i].type = 'plant';
            organisms[i].psi25 = 'Saccharomyces_cerevisiae';
            organisms[i].psi30 = 'yeast';
            organisms[i].complextab = '559292';
            organisms[i].taxid = '559292';
            break;
          case 'Escherichia coli (strain K12)':
            organisms[i].scientificName = 'Escherichia coli';
            organisms[i].nameDetails = 'strain K12';
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Escherichia_coli';
            organisms[i].psi30 = 'ecoli';
            organisms[i].complextab = '83333';
            organisms[i].taxid = '83333';
            break;
          case 'Escherichia coli':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Escherichia_coli';
            organisms[i].psi30 = 'ecolx';
            organisms[i].complextab = '562';
            organisms[i].taxid = '562';
            break;
          case 'Rattus norvegicus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'R';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Rattus_norvegicus';
            organisms[i].psi30 = 'rat';
            organisms[i].complextab = '10116';
            organisms[i].taxid = '10116';
            break;
          case 'Caenorhabditis elegans':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'W';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Caenorhabditis_elegans';
            organisms[i].psi30 = 'caeel';
            organisms[i].complextab = '6239';
            organisms[i].taxid = '6239';
            break;
          case 'Gallus gallus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'k';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Gallus_gallus';
            organisms[i].psi30 = 'chick';
            organisms[i].complextab = '9031';
            organisms[i].taxid = '9031';
            break;
          case 'Drosophila melanogaster':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'F';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Drosophila_melanogaster';
            organisms[i].psi30 = 'drome';
            organisms[i].complextab = '7227';
            organisms[i].taxid = '7227';
            break;
          case 'Bos taurus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'C';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Bos_taurus';
            organisms[i].psi30 = 'bovin';
            organisms[i].complextab = '9913';
            organisms[i].taxid = '9913';
            break;
          case 'Oryctolagus cuniculus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 't';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Oryctolagus_cuniculus';
            organisms[i].psi30 = 'rabit';
            organisms[i].complextab = '9986';
            organisms[i].taxid = '9986';
            break;
          case 'Ovis aries':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'x';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Ovis_aries';
            organisms[i].psi30 = 'sheep';
            organisms[i].complextab = '9940';
            organisms[i].taxid = '9940';
            break;
          case 'Xenopus laevis':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'f';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Xenopus_laevis';
            organisms[i].psi30 = 'xenla';
            organisms[i].complextab = '8355';
            organisms[i].taxid = '8355';
            break;
          case 'Canis lupus familiaris':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'd';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Canis_familiaris';
            organisms[i].psi30 = 'canlf';
            organisms[i].complextab = '9615';
            organisms[i].taxid = '9615';
            break;
          case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
            organisms[i].scientificName = 'Schizosaccharomyces pombe';
            organisms[i].nameDetails = 'strain 972 / ATCC 24843';
            organisms[i].symbol = 'Y';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Schizosaccharomyces_pombe';
            organisms[i].psi30 = 'schpo';
            organisms[i].complextab = '284812';
            organisms[i].taxid = '284812';
            break;
          case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
            organisms[i].scientificName = 'Vibrio cholerae serotype O1';
            organisms[i].nameDetails = 'strain ATCC 39315 / El Tor Inaba N16961';
            organisms[i].symbol = 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Vibrio_cholerae';
            organisms[i].psi30 = 'vibch';
            organisms[i].complextab = '243277';
            organisms[i].taxid = '243277';
            break;
            case 'Crotalus durissus terrificus':
            organisms[i].scientificName = 'Crotalus durissus terrificus';
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'assets/images/EMBL_Species_RattleSnake.svg';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Crotalus_durissus_terrificus';
            organisms[i].psi30 = 'crodu';
            organisms[i].complextab = '8732';
            organisms[i].taxid = '8732';
            break;
          case 'Sus scrofa':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'p';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Sus_scrofa';
            organisms[i].psi30 = 'pig';
            organisms[i].complextab = '9823';
            organisms[i].taxid = '9823';
            break;
          case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
          '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
            organisms[i].scientificName = 'Pseudomonas aeruginosa';
            organisms[i].nameDetails = 'strain ATCC 15692';
            organisms[i].symbol = 'L';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Pseudomonas_aeruginosa';
            organisms[i].psi30 = 'pseae';
            organisms[i].complextab = '208964';
            organisms[i].taxid = '208964';
            break;
          case 'Torpedo marmorata':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = '+';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Torpedo_marmorata';
            organisms[i].psi30 = 'torma';
            organisms[i].complextab = '7788';
            organisms[i].taxid = '7788';
            break;
          case 'Tetronarce californica':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = '+';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Torpedo_californica';
            organisms[i].psi30 = 'torca';
            organisms[i].complextab = '7787';
            organisms[i].taxid = '7787';
            break;
          case 'Lymnaea stagnalis':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = '\'';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'Lymnaea_stagnalis';
            organisms[i].psi30 = 'lymst';
            organisms[i].complextab = '6523';
            organisms[i].taxid = '6523';
            break;
          case 'Arabidopsis thaliana':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'B';
            organisms[i].type = 'plant';
            organisms[i].psi25 = 'arabidopsis_thaliana';
            organisms[i].psi30 = 'arath';
            organisms[i].complextab = '3702';
            organisms[i].taxid = '3702';
            break;
          case 'Danio rerio':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'Z';
            organisms[i].type = 'animal';
            organisms[i].psi25 = 'danio_rerio';
            organisms[i].psi30 = 'danre';
            organisms[i].complextab = '7955';
            organisms[i].taxid = '7955';
            break;
          case 'Severe acute respiratory syndrome coronavirus':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'v';
            organisms[i].type = 'virus';
            organisms[i].psi25 = 'Human_SARS_coronavirus';
            organisms[i].psi30 = 'sars-cov';
            organisms[i].complextab = '694009';
            organisms[i].taxid = '694009';
            break;
          case 'Severe acute respiratory syndrome coronavirus 2':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'v';
            organisms[i].type = 'virus';
            organisms[i].psi25 = 'SARS-CoV-2';
            organisms[i].psi30 = 'SARS-CoV-2';
            organisms[i].complextab = '2697049';
            organisms[i].taxid = '2697049';
            break;
          case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
            organisms[i].scientificName = 'Middle East respiratory syndrome-related coronavirus';
            organisms[i].nameDetails = 'isolate United Kingdom/H123990006/2012';
            organisms[i].symbol = 'v';
            organisms[i].type = 'virus';
            organisms[i].psi25 = 'Middle_East_respiratory_syndrome-related_coronavirus';
            organisms[i].psi30 = 'cvemc';
            organisms[i].complextab = '1263720';
            organisms[i].taxid = '1263720';
            break;
          case 'Human betacoronavirus 2c EMC/2012':
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = 'v';
            organisms[i].type = 'virus';
            organisms[i].psi25 = 'Human_betacoronavirus_2c_EMC_2012';
            organisms[i].psi30 = 'cv2ce';
            organisms[i].complextab = '1235996';
            organisms[i].taxid = '1235996';
            break;
          default:
            organisms[i].scientificName = organisms[i].name;
            organisms[i].nameDetails = '';
            organisms[i].symbol = '?';
            organisms[i].type = 'none';
            organisms[i].psi25 = '';
            organisms[i].psi30 = '';
            organisms[i].complextab = '';
            organisms[i].taxid = '';
        }
      }
      this._organisms = organisms;
    });
  }

  get organisms(): ComplexOrganisms[] {
    return this._organisms;
  }


  get query(): string {
    return this._query;
  }
}
