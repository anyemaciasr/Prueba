import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaRegistroPageRoutingModule } from './persona-registro-routing.module';

import { PersonaRegistroPage } from './persona-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaRegistroPageRoutingModule
  ],
  declarations: [PersonaRegistroPage]
})
export class PersonaRegistroPageModule {}
