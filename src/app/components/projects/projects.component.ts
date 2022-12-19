import { Component, OnInit } from '@angular/core';
import { PersonabdService } from 'src/app/personabd.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:PersonabdService) { }
  proyectos:any;


  ngOnInit(): void {
    this.service.getHeader().subscribe(data =>{ 
      this.proyectos=data;
    });
  }

}
