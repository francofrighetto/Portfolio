import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService) { }
  datosProjects:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ console.log(data);
      this.datosProjects=data.projects;
    });
  }

}
