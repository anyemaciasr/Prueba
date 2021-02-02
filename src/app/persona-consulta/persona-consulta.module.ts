import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaConsultaPageRoutingModule } from './persona-consulta-routing.module';

import { PersonaConsultaPage } from './persona-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaConsultaPageRoutingModule
  ],
  declarations: [PersonaConsultaPage]
})
export class PersonaConsultaPageModule {}
