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
  personaDevuelta
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new  Persona();
  }
  add() {
    this.personaService.post(this.persona).subscribe(
      (datos) => {this.persona = datos;},
      (error) => {console.log(error)}
    );
    
  }

}
