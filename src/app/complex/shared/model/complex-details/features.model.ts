/**
 * Created by mkoch on 19/07/2016.
 */
export class Features {
  private _participantId: string;
  private _featureType: string;
  private _featureTypeMI: string;
  private _featureTypeDefinition: string;
  private _ranges: string[];

  constructor(participantId: string, featureType: string, featureTypeMI: string, featureTypeDefinition: string, ranges: string[]) {
    this._participantId = participantId;
    this._featureType = featureType;
    this._featureTypeMI = featureTypeMI;
    this._featureTypeDefinition = featureTypeDefinition;
    this._ranges = ranges;
  }

  get participantId(): string {
    return this._participantId;
  }

  set participantId(value: string) {
    this._participantId = value;
  }

  get featureType(): string {
    return this._featureType;
  }

  set featureType(value: string) {
    this._featureType = value;
  }

  get featureTypeMI(): string {
    return this._featureTypeMI;
  }

  set featureTypeMI(value: string) {
    this._featureTypeMI = value;
  }

  get featureTypeDefinition(): string {
    return this._featureTypeDefinition;
  }

  set featureTypeDefinition(value: string) {
    this._featureTypeDefinition = value;
  }

  get ranges(): string[] {
    return this._ranges;
  }

  set ranges(value: string[]) {
    this._ranges = value;
  }
}
