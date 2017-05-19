var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexOrganismComponent } from './complex-organism/complex-organism.component';
import { ComplexOrganismsComponent } from './complex-organisms.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from "../../shared/loading-indicators/progress-spinner/progress-spinner.module";
var ComplexOrganismsModule = (function () {
    function ComplexOrganismsModule() {
    }
    return ComplexOrganismsModule;
}());
ComplexOrganismsModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: '', component: ComplexOrganismsComponent }
            ]),
            CommonModule,
            ProgressSpinnerModule
        ],
        declarations: [ComplexOrganismsComponent,
            ComplexOrganismComponent]
    })
], ComplexOrganismsModule);
export { ComplexOrganismsModule };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-organisms/complex-organisms.module.js.map