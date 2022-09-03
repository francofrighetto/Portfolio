import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService) { }
  fotoLead:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.fotoLead=data.fotolead;
    });
  }

}
