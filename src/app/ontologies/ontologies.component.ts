import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'cp-ontologies',
  templateUrl: './ontologies.component.html',
  styleUrls: ['./ontologies.component.css']
})
export class OntologiesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['home']);
  }

}
