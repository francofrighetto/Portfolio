import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  paridad: any;
  style1 = "{position: relative;display: inline-block;font-size: 2em;font-weight: 300;margin: 0 0 30px 0}";
  style2: string = ":after {position: absolute;content: '';top: 100%;height: 3px;width: 70px;left: 0;right: 0;margin: 0 auto;background: #3498db}";

  mostrarEducation(){
    const edu = document.getElementById("education2");
    const exp = document.getElementById("experience2");
    const der = document.getElementById("a-der");
    const izq = document.getElementById("a-izq");
    const a_exp = document.getElementById("a-exp");
    const a_edu = document.getElementById("a-edu");


    if (edu != null && exp != null && der != null && izq != null && a_exp != null && a_edu != null){
    edu.style.display="inline";
    exp.style.display="none";
    der.style.color="gray";
    izq.style.color="black";
    a_edu.style.position="relative";
    a_exp.style.position="static";

    }

  }

  mostrarExperience(){
    const edu = document.getElementById("education2");
    const exp = document.getElementById("experience2");
    const izq = document.getElementById("a-izq");
    const der = document.getElementById("a-der");
    const a_exp = document.getElementById("a-exp");
    const a_edu = document.getElementById("a-edu");
    




    if (edu != null && exp != null && izq != null && der != null && a_exp != null && a_edu != null){
    edu.style.display="none";
    exp.style.display="inline";
    izq.style.color="gray";
    der.style.color="black";
    a_exp.style.position="relative";
    a_edu.style.position="static";




    }
  }

  izquierda(){
    this.mostrarExperience();
  }

  derecha(){
    this.mostrarEducation();
  }



  constructor(private datosPortfolio:DatosPortfolioService) {
    this.paridad=["left","right"];
   }
  dataExperience:any;
  dataEducation:any;
  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataExperience=data.experience;
    });
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataEducation=data.timeline_education;

    });

    const edu = document.getElementById("education2");
    const izq = document.getElementById("a-izq");
    const a_exp = document.getElementById("a-exp");



    if (edu != null && izq != null && a_exp != null){
    edu.style.display="none";
    izq.style.color="gray";
    a_exp.style.position="relative";

    }



  }


}
