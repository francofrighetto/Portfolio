import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// coleccion de eventos que se ejecutan de forma asincrona
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {
  // inyectamos
  constructor(private http:HttpClient) { }
  // metodo q devuelve observable
  obtenerDatos(): Observable<any>{
    return this.http.get('assets/data/data.json');
    
  }
  
}
