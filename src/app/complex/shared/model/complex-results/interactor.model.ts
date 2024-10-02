export interface XRef {
  identifier: string;
  identifierLink: string;
  database: string;
  qualifier: string;
}

export class Interactor {
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  interactorType: string;
  organismName: string;
  xrefs: XRef[];
}
