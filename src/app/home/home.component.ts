import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route
      .fragment
      .subscribe(fragment => this.navigateToFragment(fragment));
  }


  public navigateToFragment(fragment: string){
    if(fragment === 'citation'){
      $('#citeModal').foundation('open');
    }
  }
}
