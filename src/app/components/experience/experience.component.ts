import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})



export class ExperienceComponent implements OnInit {
  paridad: any;

  constructor(private datosPortfolio:DatosPortfolioService) {
    this.paridad=["left","right"];
   }
  dataExperience:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataExperience=data.experience;
    });
  }

  // var map: { [key: string]: number; } = {
  //   "t" : 3,
  //   "o" : 5,
  //   "g" :10
  // }


}
