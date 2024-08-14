import {
  Pipe,
  __publicField
} from "./chunk-2DYKJXQN.js";

// src/app/complex/shared/pipe/species.pipe.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SpeciesPipe = class SpeciesPipe2 {
  constructor() {
    __publicField(this, "exceptions", /* @__PURE__ */ new Map([
      ["Severe acute respiratory syndrome coronavirus", "SARS-CoV"],
      ["Severe acute respiratory syndrome coronavirus 2", "SARS-CoV-2"],
      ["Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)", "MERS-CoV"]
    ]));
  }
  transform(value, short = false) {
    const words = value.replace(";", "").split(" ");
    return this.exceptions.get(value) || (short ? words[0].charAt(0) + ". " + words[1] : words.slice(0, 2).join(" "));
  }
};
SpeciesPipe = __decorate([
  Pipe({
    name: "species",
    pure: true
  })
], SpeciesPipe);

export {
  SpeciesPipe
};
//# sourceMappingURL=chunk-JCGHHBMG.js.map
