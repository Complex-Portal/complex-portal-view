import {Component, OnInit, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ReactomeService} from "../service/reactome.service";

const url = '//reactomedev.oicr.on.ca/DiagramJs/diagram/diagram.nocache.js';

@Component({
  selector: 'app-reactome-diagram',
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
    let node = document.createElement('script');
    node.src = url;
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
      'proxyPrefix': '//reactomedev.oicr.on.ca',
      'placeHolder': 'diagramHolder',
    });
    this.loadDiagram();

  }

  private loadDiagram(): void {
    let context = this;
    this.globelDiagram.loadDiagram(this.selectedPathway);
    this.globelDiagram.onDiagramLoaded(function (loaded) {
      context.selectComplex(context.selectedComplex);
    });
  }

  public selectComplex(reactomeComplexId: string) {
    this.selectedComplex = reactomeComplexId;
    this.globelDiagram.selectItem(reactomeComplexId);
  };

  public getReactomeURL(): string {
    return 'http://www.reactome.org/PathwayBrowser/#/' + this._selectedPathway + '&SEL=' + this._selectedComplex;
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
