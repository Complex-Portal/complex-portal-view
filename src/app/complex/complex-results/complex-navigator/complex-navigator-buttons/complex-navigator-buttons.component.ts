import {Component, computed, input} from '@angular/core';
import {
  NavigatorComponentSorting,
  NavigatorStateService
} from '../service/state/complex-navigator-display.service';

@Component({
  selector: 'cp-complex-navigator-buttons',
  templateUrl: './complex-navigator-buttons.component.html',
  styleUrls: ['./complex-navigator-buttons.component.css']
})
export class ComplexNavigatorButtonsComponent {

  orthologsGroupsAvailable = input<boolean>();

  allSelected = computed(() => this.state.displayOptions.every(o => o.value()));

  partiallySelected = computed(() => this.state.displayOptions.some(o => o.value()) && !this.allSelected());

  selectAll(value: boolean) {
    this.state.ignore = true;
    this.state.displayOptions.forEach(option => option.value.set(value));
    this.state.ignore = false;
  }

  constructor(public state: NavigatorStateService) {
  }

  protected readonly NavigatorComponentSorting = NavigatorComponentSorting;
}
