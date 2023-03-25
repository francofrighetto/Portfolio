import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor() { }
  date:Date;
  anio:number;
  ngOnInit(): void {
    let posision = window.scrollY;
    window.scrollY = 0;

    this.date = new Date();
    this.anio = this.date.getFullYear();
    this.anio -= 2022;
  }

}
