import {Features} from './features.model';
/**
 * Created by mkoch on 19/07/2016.
 */
export interface CrossReference {
  database: string;
  qualifier: string;
  identifier: string;
  description: string;
  searchURL: string;
  dbMI: string;
  qualifierMI: string;
  dbdefinition: string;
  qualifierDefinition: string;
  qualifierUrl: string;
  linkedFeatures: Features[];
  otherFeatures: Features[];
}
