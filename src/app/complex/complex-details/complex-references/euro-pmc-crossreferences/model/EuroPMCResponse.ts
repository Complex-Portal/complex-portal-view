export interface Request {
  queryString: string;
  internalQuery: string;
  resultType: string;
  cursorMark: string;
  pageSize: number;
  sort: string;
  synonym: boolean;
}

export interface FullTextIdList {
  fullTextId: string[];
}

export interface DbCrossReferenceList {
  dbName: string[];
}

export interface TmAccessionTypeList {
  accessionType: string[];
}

export interface Result {
  id: string;
  source: string;
  pmid: string;
  pmcid: string;
  fullTextIdList: FullTextIdList;
  doi: string;
  title: string;
  authorString: string;
  journalTitle: string;
  pubYear: string;
  pubType: string;
  isOpenAccess: string;
  inEPMC: string;
  inPMC: string;
  hasPDF: string;
  hasBook: string;
  hasSuppl: string;
  citedByCount: number;
  hasReferences: string;
  hasTextMinedTerms: string;
  hasDbCrossReferences: string;
  dbCrossReferenceList: DbCrossReferenceList;
  hasLabsLinks: string;
  hasTMAccessionNumbers: string;
  tmAccessionTypeList: TmAccessionTypeList;
  firstIndexDate: string;
  firstPublicationDate: string;
}

export interface ResultList {
  result: Result[];
}

export interface EuroPMCResponse {
  version: string;
  hitCount: number;
  request: Request;
  resultList: ResultList;
}
