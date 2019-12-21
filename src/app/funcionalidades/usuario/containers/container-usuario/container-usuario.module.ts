import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerUsuarioComponent } from './container-usuario/container-usuario.component';



@NgModule({
  declarations: [ContainerUsuarioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerUsuarioComponent
  ]
})
export class ContainerUsuarioModule { }
