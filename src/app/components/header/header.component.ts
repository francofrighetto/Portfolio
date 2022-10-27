import { Component, OnInit } from '@angular/core';
import {PersonabdService} from '../../personabd.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // llamo a un servicio (haces datosPortfolio:DatosPortfolioService es como hacer String cadena (var y tipo, referencia))
  constructor(private service:PersonabdService) { }

  header:any;


  ngOnInit(): void {
    this.service.getHeader().subscribe(data =>{ 
      this.header=data;
      for (let dato of this.header){
      console.log(dato);

      }
    });
  }


  mostrarPerfil(){
    const login = document.getElementById("login");

    if (login!= null){
      console.log(login.style.display);
      login.style.display="inline";
      
      
    }
  }


}
