import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';
import {PersonabdService} from '../../personabd.service';
import { Persona } from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // llamo a un servicio (haces datosPortfolio:DatosPortfolioService es como hacer String cadena (var y tipo, referencia))
  constructor(private service:PersonabdService, private serviceJSON:DatosPortfolioService) { }

  header:any;
  headerJSON:any;

  persona:Persona;

  ngOnInit(): void {
    this.service.getHeader().subscribe(data =>{
      this.header=data;

    });

    this.serviceJSON.obtenerDatos().subscribe(data=>{
      this.headerJSON=data.header;
      this.persona=data.persona;
    })



  }


  mostrarPerfil(){
    const login = document.getElementById("login");

    if (login!= null){
      login.style.display="inline";
    }
  }

  subirpx(){
    window.scrollTo(0, 100);
  }


}
