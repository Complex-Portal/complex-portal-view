import {AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'cp-node-diagram',
  templateUrl: './node-diagram.component.html',
  styleUrls: ['./node-diagram.component.css']
})
export class NodeDiagramComponent implements AfterViewInit, OnChanges {
  shape = input<NodeShape>(NodeShape.ELLIPSE);
  color = input<string>('#d6d6d6');
  borderColor = input<string>();
  borderWidth = input(3);
  label = input<string>();
  height = input<string>('30pt');
  @ViewChild('labelElt', {static: false}) labelElt: ElementRef;
  @ViewChild('svg', {static: true}) svgElt: ElementRef;
  @ViewChild('shapeGroup', {static: true}) shapeGroupElt: ElementRef;
  NodeShape = NodeShape;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  private init() {
    const shapeElt = this.shapeGroupElt.nativeElement.firstElementChild;
    if (shapeElt) {
      shapeElt.setAttribute('fill', this.color());
      shapeElt.setAttribute('stroke-width', this.borderWidth().toString());
      shapeElt.setAttribute('stroke', this.borderColor() ? this.borderColor()! : this.color());

      if (this.label()) {
        const labelElt = this.labelElt.nativeElement;
        const box = labelElt.getBBox();
        if (box.width >= 100) {
          $(this.svgElt.nativeElement).attr('viewBox', `0 0 ${box.width + 5} 100`);
          if (this.shape() !== NodeShape.ELLIPSE) {
            shapeElt.setAttribute('transform', `translate(${box.width / 2 - 49})`);
          }
        }
      }
    }
  }
}


export enum NodeShape {
  TRIANGLE = 'triangle', // Bioactive Entity
  DIAMOND = 'diamond', // RNA
  ROUNDED_RECTANGLE = 'round-rectangle', // Gene
  TAG = 'tag',
  VEE = 'vee', // DNA
  ELLIPSE = 'ellipse', // Protein,
  PARALLELOGRAM = 'rhomboid',
  OCTAGON = 'octagon',
  HEXAGON = 'hexagon'
}
