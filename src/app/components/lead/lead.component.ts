import { Component, OnInit } from '@angular/core';
import {PersonabdService} from '../../personabd.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})

export class LeadComponent implements OnInit {

  constructor(private service:PersonabdService) { }
  personas:any;


  ngOnInit(): void {
    this.service.getPersonas().subscribe(data =>{ 
      this.personas=data;
      this.personas=this.personas[0];

      console.log(this.personas);
    });
  }
}
