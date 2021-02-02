import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.page.html',
  styleUrls: ['./persona-registro.page.scss'],
})
export class PersonaRegistroPage implements OnInit {
  persona:Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona= new  Persona();
  }
  add() {
   
  }

}
