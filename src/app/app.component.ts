import { Component, AfterViewInit } from '@angular/core';
// import { Router } from '@angular/router';
import * as firebase from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
  }
  title = 'portfolioAngular';
  // constructor(private router:Router){}
}
