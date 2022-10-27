import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../app/Modelo/Persona';
import { Header } from '../app/Modelo/Header';

@Injectable({
  providedIn: 'root'
})
export class PersonabdService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/';

  getPersonas(){
    return this.http.get<Persona>(this.url+"personas");
  }

  getHeader(){
    return this.http.get<Header>(this.url+"header");
  }

}
