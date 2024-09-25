import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {INavigatorComponent, INavigatorSubComponent} from './navigator-component.model';
import {XRef} from '../../../../shared/model/complex-results/interactor.model';

export class NavigatorOrthologGroup implements INavigatorComponent {
  private _orthologXref: XRef;
  private _hidden: boolean;
  private _expanded: boolean;
  private _subComponents: INavigatorComponent[];
  private _timesAppearing: number;
  private _indexAppearing: number;

  constructor(orthologXref: XRef, subComponents: INavigatorComponent[]) {
    this._orthologXref = orthologXref;
    this._subComponents = subComponents;
    this._hidden = false;
    this._expanded = false;
    this._timesAppearing = 0;
    this._indexAppearing = 0;
  }

  get isOrthologGroup(): boolean {
    return true;
  }

  get identifier(): string {
    return this._orthologXref.identifier;
  }

  get name(): string {
    let mainGeneName: string;
    const biggestTimeAppearing = 0;
    for (let i = 0; i < this._subComponents.length; i++) {
      if (this._subComponents[i].organismName.includes('Homo sapiens')) {
        mainGeneName = this._subComponents[i].name;
        return mainGeneName;
      } else if (this._subComponents[i].timesAppearing >= biggestTimeAppearing) {
        mainGeneName = this._subComponents[i].name;
      }
    }
    return mainGeneName;
  }

  get interactorType(): string {
    const interactorTypes = new Set(this._subComponents.map(component => component.interactorType));
    if (interactorTypes.size === 1) {
      return interactorTypes.values().next().value;
    }
    return 'Multiple Types';
  }

  get organismName(): string {
    const organismNames = new Set(this._subComponents.map(component => component.organismName));
    if (organismNames.size === 1) {
      return organismNames.values().next().value;
    }
    return 'Multiple Organisms';
  }

  get identifierLink(): string {
    return 'https://www.pantherdb.org/genes/geneList.do?searchType=basic&fieldName=all&listType=1&fieldValue=' +
      this._orthologXref.identifier +
      '&organism=all';
  }

  get subComponents(): INavigatorSubComponent[] {
    return this._subComponents;
  }

  get complexComponents(): ComplexComponent[] {
    return [];
  }

  get hidden(): boolean {
    return this._hidden;
  }

  get expanded(): boolean {
    return !!this._subComponents && this._expanded;
  }

  get hasSubComponents(): boolean {
    return !!this._subComponents && this._subComponents.length > 0;
  }

  get expandTooltip(): string {
    return this.expandLabel;
  }

  get expandLabel(): string {
    return 'Group members';
  }

  get timesAppearing(): number {
    return this._timesAppearing;
  }

  get indexAppearing(): number {
    return this._indexAppearing;
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
    return this.subComponents.map(subComponent => subComponent.identifier);
  }

  get orthologsGroup(): XRef {
    return this._orthologXref;
  }

  get componentQuery(): string {
    return 'pxref:("' + this.identifier + '")';
  }
}
