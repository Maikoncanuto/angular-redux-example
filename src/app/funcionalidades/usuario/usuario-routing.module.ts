import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerUsuarioComponent } from './containers/container-usuario/container-usuario/container-usuario.component';

const ROUTES: Routes = [
    { path: '', component: ContainerUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}