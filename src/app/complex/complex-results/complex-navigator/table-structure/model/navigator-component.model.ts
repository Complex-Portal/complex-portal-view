import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {XRef} from '../../../../shared/model/complex-results/xref.model';

export interface INavigatorSubComponent {
  get identifier(): string;

  get identifierLink(): string;

  get name(): string;

  get interactorType(): string;

  get organismName(): string;

  get orthologsGroup(): XRef;
}

export interface INavigatorComponent extends INavigatorSubComponent {

  get subComponents(): INavigatorSubComponent[];

  get complexComponents(): ComplexComponent[];

  get hidden(): boolean;

  get expanded(): boolean;

  get hasSubComponents(): boolean;

  get expandTooltip(): string;

  get expandLabel(): string;

  get timesAppearing(): number;

  get indexAppearing(): number;

  get isOrthologGroup(): boolean;

  set hidden(value: boolean);

  set expanded(value: boolean);

  set timesAppearing(value: number);

  set indexAppearing(value: number);

  get componentIds(): string[];

  get componentQuery(): string;
}
