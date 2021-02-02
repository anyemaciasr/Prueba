import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'personaRegistro',
        loadChildren: () => import('.././persona-registro/./persona-registro.module').then(m => m.PersonaRegistroPageModule)
      },
      {
        path: 'personaConsulta',
        loadChildren: () => import('.././persona-consulta/./persona-consulta.module').then(m => m.PersonaConsultaPageModule)
      },
      {
        path: 'personaEliminar',
        loadChildren: () => import('.././persona-eliminar/./persona-eliminar.module').then(m => m.PersonaEliminarPageModule)
      },
      {
        path: 'personaActualizar',
        loadChildren: () => import('.././persona-actualizar/./persona-actualizar.module').then(m => m.PersonaActualizarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
