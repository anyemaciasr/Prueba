import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.page.html',
  styleUrls: ['./persona-consulta.page.scss'],
})
export class PersonaConsultaPage implements OnInit {
  personas;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.personaService.get().subscribe(
      (Datos)=>{this.personas=Datos;},
      (error)=>{console.log(error);}
    )
  }
}
