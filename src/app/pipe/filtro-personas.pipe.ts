import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../models/persona';

@Pipe({
  name: 'filtroPersonas'
})

export class FiltroPersonasPipe implements PipeTransform {

  transform(personas: Persona[], searchText: string): any {
      if(searchText == null) return personas
      return personas.filter(p => (p.identificacion.toLowerCase().indexOf(searchText.toLowerCase())!==-1) 
      || (p.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      );
  }

}
