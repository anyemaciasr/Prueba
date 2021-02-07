import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.page.html',
  styleUrls: ['./persona-consulta.page.scss'],
})
export class PersonaConsultaPage {
  personas:Persona[];
  searchText:string;
  constructor(private personaService: PersonaService,private location:Location) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.personaService.get().subscribe(
      Datos=>{
        console.log(Datos); 
        this.personas=Datos;
        console.log("Datos recibidos");
      })
  }
  volver(){
    this.location.back();
  }
  delete(id:string){
    this.personaService.delete(id).subscribe(
      response => {console.log(response)}
    )
    this.get();
  }
}
