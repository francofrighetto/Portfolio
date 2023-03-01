import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-timeline3',
  templateUrl: './timeline3.component.html',
  styleUrls: ['./timeline3.component.css']
})
export class Timeline3Component implements OnInit {

  constructor(private datosPortfolio: DatosPortfolioService) { }

  timeline3:Array<any>;
  edu:any;
  trabajo:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.edu= data.education;
      this.trabajo= data.experience;

    });

    


  }

}
