import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaRegistroPage } from './persona-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaRegistroPageRoutingModule {}
