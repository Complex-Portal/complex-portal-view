import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {XRef} from '../../../../shared/model/complex-results/interactor.model';

export interface INavigatorSubComponent {
  get identifier(): string;

  get identifierLink(): string;

  get name(): string;

  get interactorType(): string;

  get organismName(): string;
}

export interface INavigatorComponent {
  get identifier(): string;

  get identifierLink(): string;

  get name(): string;

  get interactorType(): string;

  get organismName(): string;

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

  componentIds(): string[];

  get orthologsGroup(): XRef;

  get componentQuery(): string;
}
