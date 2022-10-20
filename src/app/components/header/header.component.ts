import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // llamo a un servicio (haces datosPortfolio:DatosPortfolioService es como hacer String cadena (var y tipo, referencia))
  constructor(private datosPortfolio:DatosPortfolioService) { }

  datosHeader:any;

  // Login(){
  //   this.router.navigate();
  // }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.datosHeader=data.header;
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
