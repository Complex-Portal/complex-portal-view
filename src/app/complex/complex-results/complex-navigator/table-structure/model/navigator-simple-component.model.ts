import {Interactor, XRef} from '../../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {INavigatorComponent, INavigatorSubComponent} from './navigator-component.model';

export class NavigatorSimpleComponent implements INavigatorComponent {
  private _interactor: Interactor;
  private _hidden: boolean;
  private _isSubComplex: boolean;
  private _expanded: boolean;
  private _subComponents: ComplexComponent[];
  private _timesAppearing: number;
  private _indexAppearing: number;

  constructor(interactor: Interactor, isSubComplex: boolean) {
    this._interactor = interactor;
    this._isSubComplex = isSubComplex;
    this._hidden = false;
    this._expanded = false;
    this._timesAppearing = 0;
    this._indexAppearing = 0;
    this._subComponents = null;
  }

  get isOrthologGroup(): boolean {
    return false;
  }

  get identifier(): string {
    return this._interactor.identifier;
  }

  get name(): string {
    return this._interactor.name;
  }

  get interactorType(): string {
    return this._interactor.interactorType;
  }

  get organismName(): string {
    return this._interactor.organismName;
  }

  get identifierLink(): string {
    return this._interactor.identifierLink;
  }

  get subComponents(): INavigatorSubComponent[] {
    return this._subComponents;
  }

  get complexComponents(): ComplexComponent[] {
    return this._subComponents;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  get expanded(): boolean {
    return this._isSubComplex && !!this._subComponents && this._expanded;
  }

  get hasSubComponents(): boolean {
    return this._isSubComplex && !!this._subComponents && this._subComponents.length > 0;
  }

  get expandTooltip(): string {
    return this.name + ' components';
  }

  get expandLabel(): string {
    return 'Components';
  }

  get timesAppearing(): number {
    return this._timesAppearing;
  }

  get indexAppearing(): number {
    return this._indexAppearing;
  }

  set subComponents(value: ComplexComponent[]) {
    this._subComponents = value;
  }

  set hidden(value: boolean) {
    this._hidden = value;
  }

  set expanded(value: boolean) {
    this._expanded = value;
  }

  set timesAppearing(value: number) {
    this._timesAppearing = value;
  }

  set indexAppearing(value: number) {
    this._indexAppearing = value;
  }

  componentIds(): string[] {
    return [this.identifier];
  }

  get orthologsGroup(): XRef {
    for (const xref of this._interactor.xrefs) {
      if (!!xref && xref.database === 'panther') {
        return xref;
      }
    }
    return null;
  }
}
