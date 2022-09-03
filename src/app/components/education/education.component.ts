import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService) { }

  dataEducation:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataEducation=data.education;
    });
  }

}
