import {Participant} from './participant.model';
import {CrossReference} from './cross-reference.model';

export interface ComplexDetails {
  ac: string;
  complexAc: string;
  name: string;
  systematicName: string;
  species: string;
  institution: string;
  synonyms: string[];
  functions: string[];
  properties: string[];
  ligands: string[];
  complexAssemblies: string[];
  diseases: string[];
  agonists: string[];
  antagonists: string[];
  comments: string[];
  participants: Participant[];
  crossReferences: CrossReference[];
  predicted?: boolean;
}
