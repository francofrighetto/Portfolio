import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/Modelo/Habilidad';
import { PersonabdService } from 'src/app/personabd.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService, private bd : PersonabdService ) { }
  datosSkills:any;

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data =>{
    //   this.datosSkills=data.skills;
    // });
    this.bd.getHabilidades().subscribe(data=>{
      console.log(data);
      this.datosSkills=data;
    })
  }

  habilitar(habilidad:Habilidad){
    habilidad.habilitado-=1;
    habilidad.habilitado*=(-1);
  }

}
