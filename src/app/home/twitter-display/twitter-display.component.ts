import {Component, OnInit, AfterViewInit} from '@angular/core';

const twitterURL = 'platform.twitter.com/widgets.js';

@Component({
  selector: 'app-twitter-display',
  templateUrl: './twitter-display.component.html',
  styleUrls: ['./twitter-display.component.css']
})
export class TwitterDisplayComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* tslint:disable */
    !function (d, s, id) {
      let js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://' + twitterURL;
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs');
    /* tslint:enable */
  }

}
