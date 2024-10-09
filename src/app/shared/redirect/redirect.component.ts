import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GaActionEnum, GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'cp-redirect',
  standalone: true,
  imports: [],
  template: ''
})
export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private analyticsService: GoogleAnalyticsService
  ) {
  }

  ngOnInit(): void {
    // Get the full URL path, strip out the 'qr' part, and redirect
    const fullUrl = this.route.snapshot.url.map(segment => segment.path).join('/');
    if (fullUrl.startsWith('qr/')) {
      const newUrl = fullUrl.replace(/^qr\//, ''); // Strip the leading 'qr/'
      this.analyticsService.event('qr-redirect', 'redirect', newUrl);
      console.log(`Redirecting to ${newUrl}`);
      this.router.navigate([`/${newUrl}`], {preserveFragment: true, queryParamsHandling: 'preserve'});
    } else {
      this.router.navigate(['home']);
    }
  }
}
