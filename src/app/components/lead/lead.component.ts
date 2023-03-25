import { Component, OnInit } from '@angular/core';
import {PersonabdService} from '../../personabd.service';
import { Persona } from '../../Modelo/Persona';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})

export class LeadComponent implements OnInit {

  constructor(private service:PersonabdService, private serviceJSON: DatosPortfolioService ) { }
  personas:any;
  personasJSON:any;


  ngOnInit(): void {
    // this.service.getPersonas().subscribe(data =>{
    //   this.personas=data;
    //   this.personas=this.personas[0];

    //   console.log(this.personas);
    // });

    this.serviceJSON.obtenerDatos().subscribe( data => {
      this.personasJSON = data.persona;
      this.personasJSON=this.personasJSON[0];
    });

  }
}
