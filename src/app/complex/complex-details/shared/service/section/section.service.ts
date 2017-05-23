import { Injectable } from '@angular/core';

@Injectable()
export class SectionService {

  private _participantsSection: boolean;
  private _functionSection: boolean;
  private _propertiesSection: boolean;
  private _expressionSection: boolean;
  private _diseaseSection: boolean;
  private _namesSection: boolean;

  constructor() {
  }

  public reset(): void {
    this._participantsSection = false;
    this._functionSection = false;
    this._propertiesSection = false;
    this._expressionSection = false;
    this._diseaseSection = false;
    this._namesSection = false;
  }

  public participantsSectionAvailable(): void {
    this._participantsSection = true;
  }

  public functionSectionAvailable(): void {
    this._functionSection = true;
  }

  public propertiesSectionAvailable(): void {
    this._propertiesSection = true;
  }

  public expressionSectionAvailable(): void {
    this._expressionSection = true;
  }

  public diseaseSectionAvailable(): void {
    this._diseaseSection = true;
  }

  public namesSectionAvailable(): void {
    this._namesSection = true;
  }


  get participantsSection(): boolean {
    return this._participantsSection;
  }

  get functionSection(): boolean {
    return this._functionSection;
  }

  get propertiesSection(): boolean {
    return this._propertiesSection;
  }

  get expressionSection(): boolean {
    return this._expressionSection;
  }

  get diseaseSection(): boolean {
    return this._diseaseSection;
  }

  get namesSection(): boolean {
    return this._namesSection;
  }
}
