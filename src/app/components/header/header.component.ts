import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';
import {PersonabdService} from '../../personabd.service';
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

  titulos_proyectos=["FrontEnd","BackEnd","Otros lenguajes","Otros"];


  ngOnInit(): void {
    this.service.getHeader().subscribe(data =>{ 
      this.header=data;
    });

    this.serviceJSON.obtenerDatos().subscribe(data=>{
      this.headerJSON=data.header;
      console.log(this.headerJSON);
    })

  }


  mostrarPerfil(){
    const login = document.getElementById("login");

    if (login!= null){
      console.log(login.style.display);
      login.style.display="inline";
      
      
    }
  }

  subirpx(){
    window.scrollTo(0, 100);
  }


}
