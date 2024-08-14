import {
  SpeciesPipe
} from "./chunk-JCGHHBMG.js";
import {
  APP_BASE_HREF,
  CommonModule,
  NgModule,
  PlatformLocation,
  RouterModule
} from "./chunk-2DYKJXQN.js";

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
          loadChildren: () => import("./complex-organisms.module-GHCUIVUA.js").then((m) => m.ComplexOrganismsModule)
        },
        {
          path: "search",
          loadChildren: () => import("./complex-results.module-DINWIQUZ.js").then((m) => m.ComplexResultsModule)
        },
        {
          path: ":id",
          loadChildren: () => import("./complex-details.module-OTTRLS3B.js").then((m) => m.ComplexDetailsModule)
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
//# sourceMappingURL=chunk-JEKURYO2.js.map
