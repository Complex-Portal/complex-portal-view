import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search(query: string) {
    this.router.navigate(['search'], { queryParams: { query: query, page: 1 }});
  }
}
