import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NodeShape} from '../../shared/visualisation/node-diagram/node-diagram.component';
import {ComplexParticipant} from '../complex-participants.component';

@Component({
  selector: 'cp-complex-participant-legend',
  templateUrl: './complex-participant-legend.component.html',
  styleUrls: ['./complex-participant-legend.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplexParticipantLegendComponent {

  @Input() participant: ComplexParticipant;
  @Input() colorLegendGroups: Map<string, string>;
  @Input() parentComplexAcs: string[];
  @Input() backgroundComplexId: string;

  getBackgroundStyle(): string {
    const colour = this.colorLegendGroups.get(this.backgroundComplexId);
    if (this.parentComplexAcs.length > 0) {
      let backgroundStyle = 'background: linear-gradient(90deg, ';
      let size = 5;
      for (const ac of this.parentComplexAcs) {
        backgroundStyle += this.colorLegendGroups.get(ac) + ' 0 ' + size + '%, ';
        size += 5;
      }
      backgroundStyle += colour + ' 0)';
      return backgroundStyle;
    } else {
      return 'background-color: ' + colour;
    }
  }

  getParentComplexAcs(): string[] {
    return [...this.parentComplexAcs, this.backgroundComplexId];
  }

  public getLegendShape(interactorType: string): NodeShape {
    // TODO: maybe talk to OLS WS at some point, but it was easier to do it like this at the time. - GH issue #172
    switch (interactorType) {
      case 'small molecule':
        return NodeShape.TRIANGLE;
      case 'protein':
      case 'peptide':
        return NodeShape.ELLIPSE;
      case 'stable complex':
        return NodeShape.HEXAGON;
      case 'molecule set':
        return NodeShape.OCTAGON;
      case 'single stranded deoxyribonucleic acid':
      case 'double stranded deoxyribonucleic acid':
        return NodeShape.PARALLELOGRAM;
      case 'small nuclear rna':
      case 'small nucleolar rna':
      case 'ribosomal rna':
      case 'messenger rna':
      case 'transfer rna':
      case 'signal recognition particle rna':
      case 'ribonucleic acid':
        return NodeShape.DIAMOND;
    }
  }

  public getLegendColor(participant: ComplexParticipant): string {
    let color;
    // TODO Talk to Colin to try a simple way to retrieve the colors .e.g. only by identifier
    if ((participant.interactorType === 'protein' || participant.interactorType === 'peptide')
      && !participant.identifier.includes('-PRO') && participant.name) {
      color = this.colorLegendGroups.get(participant.name.toUpperCase());
    } else {
      color = this.colorLegendGroups.get(participant.colorLegendIdentifier.toUpperCase());
    }
    if (!color) {
      color = '#ffffff';
    }
    return color;
  }

  public getConvertedStochiometry(stochiometry: string): string {
    // TODO: WS should send Stochiometry in right format already - GH issue #173
    return stochiometry.split(',')[0].split(':')[1].trim();
  }

}
