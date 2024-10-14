import {XRef} from '../../../../shared/model/complex-results/xref.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {INavigatorComponent} from './navigator-component.model';

export class NavigatorSimpleComponent implements INavigatorComponent {
  private _interactor: ComplexComponent;
  private _hidden: boolean;
  private _isSubComplex: boolean;
  private _expanded: boolean;
  private _complexComponents: ComplexComponent[];
  private _subComponents: INavigatorComponent[];

  private _timesAppearing: number;
  private _indexAppearing: number;

  constructor(interactor: ComplexComponent, isSubComplex: boolean) {
    this._interactor = interactor;
    this._isSubComplex = isSubComplex;
    this._hidden = false;
    this._expanded = false;
    this._timesAppearing = 0;
    this._indexAppearing = 0;
    this._complexComponents = null;
    this._subComponents = null;
  }

  get isOrthologGroup(): boolean {
    return false;
  }

  get identifier(): string {
    return this._interactor.identifier || this._interactor.ac;
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

  get subComponents(): INavigatorComponent[] {
    return this._subComponents;
  }

  get complexComponents(): ComplexComponent[] {
    return this._complexComponents;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  get expanded(): boolean {
    return this._isSubComplex && !!this._complexComponents && this._expanded;
  }

  get hasSubComponents(): boolean {
    return this._isSubComplex && !!this._complexComponents && this._complexComponents.length > 0;
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

  set complexComponents(value: ComplexComponent[]) {
    this._complexComponents = value;
    this._subComponents = value.map(component => new NavigatorSimpleComponent(component, false));
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

  get componentIds(): string[] {
    return [this.identifier];
  }

  get orthologsGroup(): XRef {
    return this._interactor.xrefs?.find(xref => xref.qualifier === 'orthology-group');
  }

  get componentQuery(): string {
    if (this.isAValidExternalIdentifier) {
      return this.identifier;
    } else {
      return this.name;
    }
  }

  get isAValidExternalIdentifier(): boolean {
    return !!this._interactor.identifier;
  }
}
