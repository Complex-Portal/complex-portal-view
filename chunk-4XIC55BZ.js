import {
  SpeciesPipe
} from "./chunk-JD75RUVK.js";
import {
  APP_BASE_HREF,
  CommonModule,
  NgModule,
  PlatformLocation,
  RouterModule
} from "./chunk-I4WWFSLP.js";

// src/app/complex/complex.module.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComplexModule = class ComplexModule2 {
};
ComplexModule = __decorate([
  NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: "organisms",
          loadChildren: () => import("./complex-organisms.module-SY5RYH6A.js").then((m) => m.ComplexOrganismsModule)
        },
        {
          path: "search",
          loadChildren: () => import("./complex-results.module-7FOOAPRR.js").then((m) => m.ComplexResultsModule)
        },
        {
          path: ":id",
          loadChildren: () => import("./complex-details.module-QP5LYOJA.js").then((m) => m.ComplexDetailsModule)
        }
      ]),
      CommonModule
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        useFactory: (s) => s.getBaseHrefFromDOM(),
        deps: [PlatformLocation]
      }
    ],
    exports: [
      SpeciesPipe
    ],
    declarations: [
      SpeciesPipe
    ]
  })
], ComplexModule);

export {
  ComplexModule
};
//# sourceMappingURL=chunk-4XIC55BZ.js.map
