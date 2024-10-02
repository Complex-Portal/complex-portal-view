import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexResultsComponent} from './complex-results.component';
import {RouterModule} from '@angular/router';
import {ComplexPaginatorComponent} from './complex-paginator/complex-paginator.component';
import {ComplexFilterComponent} from './complex-filter/complex-filter.component';
import {ComplexListComponent} from './complex-list/complex-list.component';
import {MarkdownModule} from 'ngx-markdown';
import {ComplexNavigatorModule} from './complex-navigator/complex-navigator.module';
import {ComplexNavigatorRatingComponent} from './complex-navigator/complex-navigator-rating/complex-navigator-rating.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ComplexModule} from '../complex.module';
import {ProgressSpinnerComponent} from '../../shared/loading-indicators/progress-spinner/progress-spinner.component';
import {TruncatePipe} from '../../shared/truncate/truncate.pipe';
import {SpeciesPipe} from '../shared/pipe/species.pipe';
import {MatSlider, MatSliderRangeThumb, MatSliderThumb} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatTab, MatTabGroup} from '@angular/material/tabs';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexResultsComponent},
  ]),
    CommonModule,
    ProgressSpinnerComponent, MarkdownModule,
    ComplexNavigatorModule, MatTooltipModule, ComplexModule,
    TruncatePipe, SpeciesPipe, MatSlider, MatSliderThumb,
    FormsModule, MatSliderRangeThumb, MatTabGroup, MatTab
  ],
  exports: [],
  declarations: [ComplexResultsComponent,
    ComplexListComponent,
    ComplexFilterComponent,
    ComplexPaginatorComponent,
    ComplexNavigatorRatingComponent
  ]
})
export class ComplexResultsModule {
}
