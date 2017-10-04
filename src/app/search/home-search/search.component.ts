import {Component, OnInit} from '@angular/core';
import {Category} from '../../shared/google-analytics/category.enum';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'cp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search(query: string, typeOfButton: string) {
    this.searchService.search(query, Category.home, typeOfButton);
  }
}
