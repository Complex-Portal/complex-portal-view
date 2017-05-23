import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input,
  OnInit
} from '@angular/core';
import {SectionService} from '../service/section/section.service';
import {PageScrollInstance, PageScrollService} from 'ng2-page-scroll';
import {DOCUMENT} from '@angular/platform-browser';
import {GoogleAnalyticsService} from '../../../../shared/google-analytics/google-analytics.service';
import {Action} from '../../../../shared/google-analytics/action.enum';
import {Category} from '../../../../shared/google-analytics/category.enum';

declare const $: any;

@Component({
  selector: 'cp-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoToComponent implements OnInit, AfterViewInit {
  private _sectionName: string;

  constructor(private _sectionService: SectionService, private cdr: ChangeDetectorRef,
              private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private ga: GoogleAnalyticsService) {
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
    $('.goToMenu').foundation();
  }

  public scrollToElement(idReference: string) {
    this.ga.invokeCustomEvent(Action.GoToMenu, Category.details, idReference);
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#' + idReference);
    this.pageScrollService.start(pageScrollInstance);
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
