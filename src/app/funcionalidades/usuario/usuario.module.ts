import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ContainerUsuarioComponent } from './containers/container-usuario/container-usuario/container-usuario.component';

@NgModule({
  declarations: [
    ViewComponent, 
    DashboardComponent, 
    ContainerUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    ContainerUsuarioComponent,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
