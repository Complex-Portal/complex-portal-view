import {Component, computed, input} from '@angular/core';
import {
  NavigatorComponentSorting,
  NavigatorStateService
} from '../service/state/complex-navigator-display.service';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';
import {Action} from '../../../../shared/google-analytics/types/action.enum';

@Component({
  selector: 'cp-complex-navigator-buttons',
  templateUrl: './complex-navigator-buttons.component.html',
  styleUrls: ['./complex-navigator-buttons.component.css']
})
export class ComplexNavigatorButtonsComponent {

  orthologsGroupsAvailable = input<boolean>();

  allSelected = computed(() => this.state.displayOptions.every(o => o.value()));

  partiallySelected = computed(() => this.state.displayOptions.some(o => o.value()) && !this.allSelected());

  constructor(
    public state: NavigatorStateService,
    private googleAnalytics: AnalyticsService
  ) {
  }

  selectAll(value: boolean) {
    this.state.ignore = true;
    this.state.displayOptions.forEach(option => option.value.set(value));
    this.state.ignore = false;
  }

  public onButtonClicked(action: Action): void {
    this.googleAnalytics.useComplexNavigatorButton(action);
  }

  protected readonly NavigatorComponentSorting = NavigatorComponentSorting;
  protected readonly Action = Action;
}
