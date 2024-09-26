import {Component, computed, effect, Inject, input} from '@angular/core';
import {interactorTypeIcon, organismIcon} from '../../../../../complex-portal-utils';
import {APP_BASE_HREF} from '@angular/common';
import {INavigatorComponent, INavigatorSubComponent} from '../../model/navigator-component.model';
import {NavigatorStateService} from '../../../service/state/complex-navigator-display.service';

@Component({
  selector: 'cp-table-interactor-name',
  templateUrl: './table-interactor-name.component.html',
  styleUrls: ['./table-interactor-name.component.css']
})
export class TableInteractorNameComponent {

  interactor = input.required<INavigatorSubComponent>();
  convertedInteractor = computed(() => this.interactor() as INavigatorComponent);
  interactorTypeIcon = computed(() => interactorTypeIcon(this.interactor().interactorType));
  interactorOrganismIcon = computed(() => organismIcon(this.interactor().organismName));
  externalLinkVisible: boolean;
  isOrthologGroup = computed(() => this.state.mergeOrthologs() &&
    this.interactor().orthologsGroup?.identifier === this.interactor()?.identifier);
  interactorQuery = input<string>();

  constructor(@Inject(APP_BASE_HREF) private _baseHref: string, public state: NavigatorStateService) {
  }

  externalLinkVisibleHandler(isVisible: boolean): void {
    this.externalLinkVisible = isVisible;
  }

  get maskStyle(): string {
    return `mask: url(${this._baseHref}${this.interactorOrganismIcon()}) no-repeat center; -webkit-mask: url(${this._baseHref}${this.interactorOrganismIcon()}) no-repeat center`;
  }
}
