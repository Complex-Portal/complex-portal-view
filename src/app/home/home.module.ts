import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {TileMenuComponent} from './tile-menu/tile-menu.component';
import {TwitterDisplayComponent} from './twitter-display/twitter-display.component';
import {NewsletterSubscriptionComponent} from './newsletter-subscription/newsletter-subscription.component';
import {SearchComponent} from '../search/home-search/search.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HomeComponent}
  ]),
    CommonModule
  ],
  declarations: [HomeComponent, SearchComponent,
    NewsletterSubscriptionComponent,
    TwitterDisplayComponent,
    TileMenuComponent,
  ]
})
export class HomeModule {
}
