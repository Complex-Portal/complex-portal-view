import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';
import {ComplexNavigatorComponent} from './complex-navigator.component';
import {TableStructureComponent} from './table-structure/table-structure.component';
import {TableHeaderComponent} from './table-structure/table-header/table-header.component';
import {TableInteractorColumnComponent} from './table-structure/table-interactor-column/table-interactor-column.component';
import {
  TableInteractorNameComponent
} from './table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component';
import {
  TableInteractorExternalLinkComponent
} from './table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component';
import {
  TableInteractorStoichiometryComponent
} from './table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component';
import {
  TableMainInteractorComponent
} from './table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component';
import {
  TableSubcomponentInteractorComponent
} from './table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component';
import {ComplexNavigatorButtonsComponent} from './complex-navigator-buttons/complex-navigator-buttons.component';
import {RouterModule} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProgressSpinnerComponent} from '../../../shared/loading-indicators/progress-spinner/progress-spinner.component';
import {ComplexModule} from '../../complex.module';
import {SpeciesPipe} from '../../shared/pipe/species.pipe';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ProgressSpinnerComponent,
    MarkdownModule,
    MatTooltipModule,
    ComplexModule,
    SpeciesPipe,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatSlideToggle,
    MatCheckbox,
    MatTab,
    MatTabGroup
  ],
  exports: [
    ComplexNavigatorComponent,
  ],
  declarations: [
    ComplexNavigatorComponent,
    TableStructureComponent,
    TableHeaderComponent,
    TableInteractorColumnComponent,
    TableInteractorNameComponent,
    TableInteractorExternalLinkComponent,
    TableInteractorStoichiometryComponent,
    TableMainInteractorComponent,
    TableSubcomponentInteractorComponent,
    ComplexNavigatorButtonsComponent,
  ]
})
export class ComplexNavigatorModule {
}
