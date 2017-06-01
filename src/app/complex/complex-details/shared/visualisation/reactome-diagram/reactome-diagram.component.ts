import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {ReactomeService} from '../../../complex-function/reactome-crossreferences/shared/service/reactome.service';

const baseURL = environment.reactome_base_url;

@Component({
  selector: 'cp-reactome-diagram',
  templateUrl: 'reactome-diagram.component.html',
  styleUrls: ['reactome-diagram.component.css']
})
export class ReactomeDiagramComponent implements OnInit, OnChanges {
  private diagramContext: any;
  private globelDiagram: any;

  private _reactomeComplexe = {};
  private _reactomePathways = {};
  private _selectedComplex: string;
  private _selectedPathway: string;
  @ViewChild('diagramHolder') diagramHolder;
  @Output() onLoaded = new EventEmitter<boolean>();


  constructor(private reactomeService: ReactomeService) {
  }

  ngOnInit() {
    this.loadScript();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.diagramContext) {
      if (changes['selectedPathway']) {
        this.loadDiagram();
      } else if (changes['selectedComplex']) {
        this.selectComplex(this.selectedComplex);
      }
    }
  }

  private loadScript(): void {
    const node = document.createElement('script');
    node.src = baseURL + '/DiagramJs/diagram/diagram.nocache.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  @HostListener('window:onReactomeDiagramReady', ['$event'])
  onReactomeDiagramReadyListener(event) {
    this.diagramContext = event.detail;
    this.initReactomeDiagram();
  }

  public initReactomeDiagram(): void {
    this.globelDiagram = this.diagramContext.Diagram.create({
      'proxyPrefix': baseURL,
      'placeHolder': 'diagramHolder',
      'width': this.diagramHolder.nativeElement.clientWidth,
      'height': this.diagramHolder.nativeElement.clientWidth * 0.5,
    });
    this.loadDiagram();

  }

  @HostListener('window:resize', ['$event.target'])
  onResize(): void {
    this.globelDiagram.resize(this.diagramHolder.nativeElement.clientWidth, this.diagramHolder.nativeElement.clientWidth * 0.8);
    this.selectComplex(this.selectedComplex);
  }


  private loadDiagram(): void {
    const context = this;
    this.globelDiagram.loadDiagram(this.selectedPathway);
    this.globelDiagram.onDiagramLoaded(function (loaded) {
      context.selectComplex(context.selectedComplex);
    });
  }

  public selectComplex(reactomeComplexId: string): void {
    this.selectedComplex = reactomeComplexId;
    this.globelDiagram.resetFlaggedItems();
    this.globelDiagram.flagItems(reactomeComplexId);
  };

  public getReactomeURL(): string {
    return baseURL + '/PathwayBrowser/#/' + this._selectedPathway + '&SEL=' + this._selectedComplex;
  }

  get reactomePathways(): any {
    return this._reactomePathways;
  }

  @Input()
  set reactomePathways(value: any) {
    this._reactomePathways = value;
  }

  get reactomeComplexe(): any {
    return this._reactomeComplexe;
  }

  @Input()
  set reactomeComplexe(value: any) {
    this._reactomeComplexe = value;
  }

  get selectedComplex(): string {
    return this._selectedComplex;
  }

  @Input()
  set selectedComplex(value: string) {
    this._selectedComplex = value;
  }

  get selectedPathway(): string {
    return this._selectedPathway;
  }

  @Input()
  set selectedPathway(value: string) {
    this._selectedPathway = value;
  }
}
