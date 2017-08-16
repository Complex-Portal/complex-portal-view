var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
var ComplexModule = (function () {
    function ComplexModule() {
    }
    return ComplexModule;
}());
ComplexModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'organisms', loadChildren: 'app/complex/complex-organisms/complex-organisms.module#ComplexOrganismsModule' },
                { path: 'search', loadChildren: 'app/complex/complex-results/complex-results.module#ComplexResultsModule' },
                { path: ':id', loadChildren: 'app/complex/complex-details/complex-details.module#ComplexDetailsModule' },
            ]),
            CommonModule,
        ],
        declarations: [],
        exports: []
    })
], ComplexModule);
export { ComplexModule };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex.module.js.map