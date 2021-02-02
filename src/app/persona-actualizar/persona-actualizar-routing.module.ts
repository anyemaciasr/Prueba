import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaActualizarPage } from './persona-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaActualizarPageRoutingModule {}
