import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'cp-data-content',
  templateUrl: './data-content.component.html',
  styleUrls: ['./data-content.component.css']
})
export class DataContentComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  public goToComplex (ac : string) : void {
    this.router.navigate(['complex', ac])
  }

  public goToECO (term : string) : void {
    this.goTo(environment.ols_eco_url+term)
  }

  public goToGO (term : string) : void {
    this.goTo(environment.ols_go_url+term)
  }

  private goTo(url : string) : void {
    window.open(
      url,
      '_blank'
    );
  }
}
