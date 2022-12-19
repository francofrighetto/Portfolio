import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../app/Modelo/Persona';
import { Header } from '../app/Modelo/Header';

@Injectable({
  providedIn: 'root'
})
export class PersonabdService {

  constructor(private http:HttpClient) { }
  url='https://portfolio-spring-back.herokuapp.com/';

  getPersonas(){
    return this.http.get<Persona>(this.url+"personas");
  }

  getHeader(){
    return this.http.get<Header>(this.url+"header");
  }

  getProyectos(){
    return this.http.get<Header>(this.url+"proyectos");
  }

  getHabilidades(){
    return this.http.get<Header>(this.url+"habilidades");
  }

  getTitulosProyectos(){
    return this.http.get<Header>(this.url+"proyectos/titulos");
  }

}
