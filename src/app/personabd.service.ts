import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../app/Modelo/Persona';
import { Header } from '../app/Modelo/Header';
import { Habilidad } from './Modelo/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class PersonabdService {

  constructor(private http:HttpClient) { }
  // url='https://portfolio-spring-back.herokuapp.com/';
  url='http://localhost:8080/';


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
    return this.http.get<Habilidad>(this.url+"habilidades");
  }

  getTitulosProyectos(){
    return this.http.get<Header>(this.url+"proyectos/titulos");
  }

}
