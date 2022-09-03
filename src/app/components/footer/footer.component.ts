import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private datosPortfolio:DatosPortfolioService, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('src/assets/svg/mex.svg'))
    
  }
  
  dataFooter:any;
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{ 
      this.dataFooter=data.footer;
    });
  }

}
