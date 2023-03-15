import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-progress-habilidades',
  templateUrl: './progress-habilidades.component.html',
  styleUrls: ['./progress-habilidades.component.css']
})
export class ProgressHabilidadesComponent implements OnInit {

  constructor(private elRef: ElementRef, private datosPortfolio: DatosPortfolioService) { }
  carga: boolean = false;
  progreso: any;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = this.elRef.nativeElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;


    if (scrollPosition + 300 >= componentPosition) {
      if (!this.carga) {

      for (let i of this.progreso) {
          const intervalo = setInterval(() => {
            i.porcentaje_inicial = parseInt(i.porcentaje_inicial)+1;
            if (parseInt(i.porcentaje_inicial) >= parseInt(i.porcentaje)) {
              clearInterval(intervalo);
            }
          }, 10);
          
        }
        this.carga = true;
      }
    }
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.progreso = data.barra_progreso;

    });
  }
}


