import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.css']
})
export class Timeline2Component implements OnInit {

  paridad = ["left", "right"];
  array_experience = ["all", "work", "education"];

  style1 = "{position: relative;display: inline-block;font-size: 2em;font-weight: 300;margin: 0 0 30px 0}";
  style2: string = ":after {position: absolute;content: '';top: 100%;height: 3px;width: 70px;left: 0;right: 0;margin: 0 auto;background: #3498db}";

  mostrarEducation() {
    localStorage.setItem("experience", "education");

    const edu = document.getElementById("education");
    const work = document.getElementById("work");
    const all = document.getElementById("all");

    const izq = document.getElementById("a-izq");
    const der = document.getElementById("a-der");

    const a_work = document.getElementById("a-work");
    const a_edu = document.getElementById("a-edu");
    const a_all = document.getElementById("a-all");


    if (edu != null && izq != null && a_work != null && work != null && a_edu != null && all != null && a_all != null && der != null) {
      edu.style.display = "";
      all.style.display = "none";
      work.style.display = "none";

      izq.style.color = "black";
      der.style.color = "gray";

      a_work.style.position = "static";
      a_all.style.position = "static";
      a_edu.style.position = "relative";

      a_edu.className += " linea";
      a_all.classList.remove("linea");
      a_work.classList.remove("linea");


    }

  }

  mostrarExperience() {
    localStorage.setItem("experience", "work");

    const edu = document.getElementById("education");
    const work = document.getElementById("work");
    const all = document.getElementById("all");

    const izq = document.getElementById("a-izq");
    const der = document.getElementById("a-der");

    const a_work = document.getElementById("a-work");
    const a_edu = document.getElementById("a-edu");
    const a_all = document.getElementById("a-all");


    if (edu != null && izq != null && a_work != null && work != null && a_edu != null && all != null && a_all != null && der != null) {
      edu.style.display = "none";
      all.style.display = "none";
      work.style.display = "";

      izq.style.color = "black";
      der.style.color = "black";

      a_work.style.position = "relative";
      a_all.style.position = "static";
      a_edu.style.position = "static";

      a_work.className += " linea";
      a_all.classList.remove("linea");
      a_edu.classList.remove("linea");

    }
  }

  mostrarTodo() {
    localStorage.setItem("experience", "all");
    const edu = document.getElementById("education");
    const work = document.getElementById("work");
    const all = document.getElementById("all");

    const izq = document.getElementById("a-izq");
    const der = document.getElementById("a-der");

    const a_work = document.getElementById("a-work");
    const a_edu = document.getElementById("a-edu");
    const a_all = document.getElementById("a-all");


    if (edu != null && izq != null && a_work != null && work != null && a_edu != null && all != null && a_all != null && der != null) {
      edu.style.display = "none";
      all.style.display = "";
      work.style.display = "none";

      izq.style.color = "gray";
      der.style.color = "black";

      a_work.style.position = "static";
      a_edu.style.position = "static";
      a_all.style.position = "relative";

      a_all.className += " linea";
      a_edu.classList.remove("linea");
      a_work.classList.remove("linea");
    }

  }

  izquierda() {
    if (localStorage.getItem("experience") == "work") {
      this.mostrarTodo();
    }
    else if (localStorage.getItem("experience") == "education") {
      this.mostrarExperience();
    }
  }

  derecha() {
    if (localStorage.getItem("experience") == "all") {
      this.mostrarExperience();
    }
    else if (localStorage.getItem("experience") == "work") {
      this.mostrarEducation();
    }
  }



  constructor(private datosPortfolio: DatosPortfolioService) {
  }

  dataExperience: any;
  dataEducation: any;
  timeline2: any;


  ngOnInit(): void {

    // localStorage.setItem("experience", "all");
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.timeline2 = data.timeline2;
    });

    const edu = document.getElementById("education");
    const work = document.getElementById("work");
    const all = document.getElementById("all");



    const izq = document.getElementById("a-izq");
    const a_work = document.getElementById("a-work");
    const a_edu = document.getElementById("a-edu");
    const a_all = document.getElementById("a-all");





    if (edu != null && izq != null && a_work != null && work != null && a_edu != null && all != null && a_all != null) {
      edu.style.display = "none";
      work.style.display = "none";

      izq.style.color = "gray";

      a_work.style.position = "";
      a_edu.style.position = "";
      a_all.style.position = "relative";
      a_all.className +=" linea";
      


    }



  }




}
