import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-habilidades',
  templateUrl: './progress-habilidades.component.html',
  styleUrls: ['./progress-habilidades.component.css']
})
export class ProgressHabilidadesComponent implements OnInit {

  constructor(private elRef: ElementRef) { }
  width: number = 0;
  carga:boolean=false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log("entro");
    const componentPosition = this.elRef.nativeElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;

    if (scrollPosition+300 >= componentPosition) {
      if (!this.carga){
      const intervalo = setInterval(() => {
        this.width++;
        if (this.width === 20) {
          clearInterval(intervalo);
        }
      }, 20);
    }
    this.carga=true;
  }
  }

  ngOnInit(): void {
    // var bottom_of_window = $(window).scrollTop() + $(window).height();
    // var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()

    // const developmentWrapper = document.querySelector(".development-wrapper") as HTMLElement;
    // const bottom_of_window = window.scrollY;
    // const middle_of_developmentWrapper = developmentWrapper.offsetHeight;
    // console.log(bottom_of_window, middle_of_developmentWrapper);



    // if (true) {
    //   const intervalo = setInterval(() => {
    //     this.width++;
    //     // console.log('El contador es:', this.width);
    //     if (this.width === 20) {
    //       clearInterval(intervalo);
    //     }
    //   }, 20);
    // }
  }
}
function onWindowScroll() {
  throw new Error('Function not implemented.');
}

