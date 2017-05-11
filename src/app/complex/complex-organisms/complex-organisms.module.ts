import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexOrganismComponent} from "./complex-organism/complex-organism.component";
import {ComplexOrganismsComponent} from "./complex-organisms.component";
import {RouterModule} from "@angular/router";
import {MdProgressSpinnerModule} from "@angular/material";
import {ProgressSpinnerComponent} from "../../shared/loading-indicators/progress-spinner/progress-spinner.component";
import {ComplexModule} from "../complex.module";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexOrganismsComponent}
  ]),
    CommonModule,
    ComplexModule
  ],
  declarations: [ComplexOrganismsComponent,
    ComplexOrganismComponent]
})
export class ComplexOrganismsModule { }
