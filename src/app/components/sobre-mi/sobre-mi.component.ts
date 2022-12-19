import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let posision = window.scrollY;
    window.scrollY = 0;
    console.log(posision);
    
  }

}
