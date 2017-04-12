import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexOrganismComponent} from "./complex-organism/complex-organism.component";
import {ComplexOrganismsComponent} from "./complex-organisms.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexOrganismsComponent}
  ]),
    CommonModule
  ],
  declarations: [ComplexOrganismsComponent,
    ComplexOrganismComponent]
})
export class ComplexOrganismsModule { }
