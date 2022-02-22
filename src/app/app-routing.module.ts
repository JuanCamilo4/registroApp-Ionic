import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './personas/pages/agregar/agregar.component';
import { BuscarComponent } from './personas/pages/buscar/buscar.component';
import { HomeComponent } from './personas/pages/home/home.component';
import { ListadoComponent } from './personas/pages/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'agregar/:id',
    component: AgregarComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  }
];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
