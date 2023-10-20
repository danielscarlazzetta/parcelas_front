import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';


@NgModule({
  declarations: [
    DashboardPrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
