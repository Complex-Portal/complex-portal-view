import {Component, Input, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from '../../../shared/google-analytics/google-analytics.service';
import {Router} from '@angular/router';
import {Action} from '../../../shared/google-analytics/action.enum';
import {Category} from '../../../shared/google-analytics/category.enum';
import {NotificationService} from '../../../shared/notification/service/notification.service';

@Component({
  selector: 'cp-complex-organism',
  templateUrl: './complex-organism.component.html',
  styleUrls: ['./complex-organism.component.css']
})
export class ComplexOrganismComponent implements OnInit {
  private _name: string;
  private _symbol: string;
  private _count: string;

  constructor(private router: Router, private ga: GoogleAnalyticsService, private notificationService : NotificationService) {
  }

  ngOnInit() {
  }

  search(specieName: string) {
    this.ga.invokeCustomEvent(Action.search, Category.organisms, specieName);
    this.router.navigate(['complex/search'], {queryParams: {query: '*', species: [specieName], page: 1}});

  }

  featureNotAvailableYet() {
    this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
  }

  get name(): string {
    return this._name;
  }

  @Input()
  set name(value: string) {
    this._name = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  @Input()
  set symbol(value: string) {
    this._symbol = value;
  }

  get count(): string {
    return this._count;
  }

  @Input()
  set count(value: string) {
    this._count = value;
  }
}
