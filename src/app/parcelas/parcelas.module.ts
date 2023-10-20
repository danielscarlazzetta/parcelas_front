import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcelasRoutingModule } from './parcelas-routing.module';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ParcelasLayoutComponentComponent } from './layouts/parcelas-layout-component/parcelas-layout-component.component';


@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    ParcelasLayoutComponentComponent
  ],
  imports: [
    CommonModule,
    ParcelasRoutingModule
  ]
})
export class ParcelasModule { }
