import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'cp-ontologies',
  templateUrl: './ontologies.component.html',
  styleUrls: ['./ontologies.component.scss']
})
export class OntologiesComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Ontologies');
    this.router.navigate(['home']);
  }

}
