import {Component, OnInit} from '@angular/core';

const twitterURL = 'https://platform.twitter.com/widgets.js';

declare global {
  interface Window { twttr: any;
  }
}

@Component({
  selector: 'cp-twitter-display',
  templateUrl: './twitter-display.component.html',
  styleUrls: ['./twitter-display.component.scss']
})
export class TwitterDisplayComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.initTwitterWidget();
  }

  private initTwitterWidget() {
    /* tslint:disable */
    window.twttr = (function (d, s, id, call) {
      let js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = twitterURL;
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };
    })(document, "script", "twitter-wjs", this.reloadWidget());
    /* tslint:enable */
  }

  private reloadWidget(): void {
    try {
      window.twttr.widgets.load(document.getElementById('twitter'));
    } catch (ignore) {
      // ignore
    }
  }
}
