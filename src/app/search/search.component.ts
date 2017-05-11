import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'cp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private angulartics2: Angulartics2) {
  }

  ngOnInit() {
  }

  search(query: string) {
    this.angulartics2.eventTrack.next({ action: query, properties: { category: 'search', label: 'home'}});
    this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 }});
  }
}
