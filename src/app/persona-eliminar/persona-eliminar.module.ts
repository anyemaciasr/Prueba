import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaEliminarPageRoutingModule } from './persona-eliminar-routing.module';

import { PersonaEliminarPage } from './persona-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaEliminarPageRoutingModule
  ],
  declarations: [PersonaEliminarPage]
})
export class PersonaEliminarPageModule {}
