import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaEliminarPage } from './persona-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaEliminarPageRoutingModule {}
