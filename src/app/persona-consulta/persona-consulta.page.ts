import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.page.html',
  styleUrls: ['./persona-consulta.page.scss'],
})
export class PersonaConsultaPage implements OnInit {
  personas:Persona[];
  constructor(private personaService: PersonaService,private location:Location) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.personaService.get().subscribe(
      (Datos)=>{this.personas=Datos;},
      (error)=>{console.log(error);}
    )
  }
  volver(){
    this.location.back();
  }
}
