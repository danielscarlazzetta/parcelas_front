import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ParcelasLayoutComponentComponent } from './layouts/parcelas-layout-component/parcelas-layout-component.component';

const routes: Routes = [
  {
    path: '',
    component: ParcelasLayoutComponentComponent,
    children: [
      { path: 'listar', component: ListarComponent},
      { path: 'agregar', component: AgregarComponent},
      { path: 'editar', component: EditarComponent},
      { path: 'eliminar', component: EliminarComponent},
      { path: '**', redirectTo: 'listar'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelasRoutingModule { }
