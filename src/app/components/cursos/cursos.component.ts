import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService) {
    
  }
   dataCourses:any;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataCourses=data.courses;
    });
  }

}
