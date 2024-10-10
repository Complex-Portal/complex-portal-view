import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import {SectionService} from '../service/section/section.service';
import {DOCUMENT} from '@angular/common';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';
import {PageScrollService} from 'ngx-page-scroll-core';

@Component({
  selector: 'cp-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoToComponent implements OnInit, AfterViewInit {
  private _sectionName: string;

  constructor(private _sectionService: SectionService, private cdr: ChangeDetectorRef, private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any, private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
    switch (this._sectionName) {
      case 'Participants':
        this._sectionService.participantsSectionAvailable();
        break;
      case 'Function':
        this._sectionService.functionSectionAvailable();
        break;
      case 'Properties':
        this._sectionService.propertiesSectionAvailable();
        break;
      case 'Diseases and Pathologies':
        this._sectionService.diseaseSectionAvailable();
        break;
      case 'Expression and Cellular Location':
        this._sectionService.expressionSectionAvailable();
        break;
      case 'Additional Information':
        this._sectionService.namesSectionAvailable();
        break;
    }
  }

  ngAfterViewInit(): void {
    // Important to apply foundation
    $('.goToMenu').foundation();
  }

  public scrollToElement(idReference: string) {
    this.googleAnalyticsService.fireGoToDetailsSectionEvent(idReference);
    this.pageScrollService.scroll({document: this.document, scrollTarget: '#' + idReference});
  }

  public doCheckSection(): void {
    this.cdr.detectChanges();
  }

  public isSelected(sectionName: string): boolean {
    return this._sectionName === sectionName;
  }

  get sectionName(): string {
    return this._sectionName;
  }

  @Input()
  set sectionName(value: string) {
    this._sectionName = value;
  }

  get sectionService(): SectionService {
    return this._sectionService;
  }
}
