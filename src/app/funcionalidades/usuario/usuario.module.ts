import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [ViewComponent, DashboardComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    ViewComponent,
    DashboardComponent,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
