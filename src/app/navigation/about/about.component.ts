import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {Router} from '@angular/router';

@Component({
  selector: 'cp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  overview = environment.complex_portal_documentation_url + 'about/overview.md';
  funding = environment.complex_portal_documentation_url + 'about/funding.md';
  code = environment.complex_portal_documentation_url + 'about/code-repository.md';
  license_privacy = environment.complex_portal_documentation_url + 'about/license.md';
  publications = environment.complex_portal_documentation_url + 'about/publications.md';
  // We use the Intact Portal documentation for the SAB page to keep it in sync between Intact and Complex Portal
  sab = environment.intact_portal_documentation_url + 'about/scientific-advisory-board.md';
  requests = environment.complex_portal_documentation_url + 'about/requests.md';

  constructor(private titleService: Title, private router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - About');
    $('cp-about').foundation();
    ProgressBarComponent.hide();
  }
}
