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
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.datosHeader=data.header;
    });
  }
}
