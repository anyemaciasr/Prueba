import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaActualizarPageRoutingModule } from './persona-actualizar-routing.module';

import { PersonaActualizarPage } from './persona-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaActualizarPageRoutingModule
  ],
  declarations: [PersonaActualizarPage]
})
export class PersonaActualizarPageModule {}
