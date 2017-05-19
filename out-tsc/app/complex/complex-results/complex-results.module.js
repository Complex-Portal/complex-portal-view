var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexResultsComponent } from './complex-results.component';
import { RouterModule } from '@angular/router';
import { ComplexPaginatorComponent } from './complex-paginator/complex-paginator.component';
import { ComplexFilterComponent } from './complex-filter/complex-filter.component';
import { ComplexListComponent } from './complex-list/complex-list.component';
import { ProgressSpinnerModule } from "../../shared/loading-indicators/progress-spinner/progress-spinner.module";
var ComplexResultsModule = (function () {
    function ComplexResultsModule() {
    }
    return ComplexResultsModule;
}());
ComplexResultsModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: '', component: ComplexResultsComponent },
            ]),
            CommonModule,
            ProgressSpinnerModule
        ],
        declarations: [ComplexResultsComponent,
            ComplexListComponent,
            ComplexFilterComponent,
            ComplexPaginatorComponent,
        ]
    })
], ComplexResultsModule);
export { ComplexResultsModule };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-results.module.js.map