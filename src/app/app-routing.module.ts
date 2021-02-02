import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'persona-registro',
    loadChildren: () => import('./persona-registro/persona-registro.module').then( m => m.PersonaRegistroPageModule)
  },
  {
    path: 'persona-consulta',
    loadChildren: () => import('./persona-consulta/persona-consulta.module').then( m => m.PersonaConsultaPageModule)
  },
  {
    path: 'persona-eliminar',
    loadChildren: () => import('./persona-eliminar/persona-eliminar.module').then( m => m.PersonaEliminarPageModule)
  },
  {
    path: 'persona-actualizar',
    loadChildren: () => import('./persona-actualizar/persona-actualizar.module').then( m => m.PersonaActualizarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
