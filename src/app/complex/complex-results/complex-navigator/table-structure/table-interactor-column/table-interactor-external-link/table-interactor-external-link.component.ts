import {Component, input, OnInit, output} from '@angular/core';
import {INavigatorComponent} from '../../model/navigator-component.model';

@Component({
  selector: 'cp-table-interactor-external-link',
  templateUrl: './table-interactor-external-link.component.html',
  styleUrls: ['./table-interactor-external-link.component.scss']
})
export class TableInteractorExternalLinkComponent implements OnInit {
  interactor = input.required<INavigatorComponent>();

  externalLinkVisible = output<boolean>();

  ngOnInit(): void {
    this.showExternalLink();
  }

  isAnExternalIdentifier(): boolean {
    // On cases, the component does not have an external identifier (like some molecule sets).
    // Currently, these components have a null identifier.
    // This is a bug as all components should have some identifier to be able to group, compare, etc.).
    // When this bug is fixed, for components with no identifier, the back-end will return their AC as identifier,
    // but we do not want to show it or link from it, we just use it as the id of the object.
    return !!this.interactor().identifier && !this.interactor().identifier.startsWith('EBI-');
  }

  showExternalLink(): boolean {
    if (this.interactor().hasSubComponents && this.interactor().interactorType === 'stable complex') {
      this.externalLinkVisible.emit(false);
      return false;
    }
    this.externalLinkVisible.emit(!!this.interactor().identifierLink);
    return !!this.interactor().identifierLink;
  }
}
