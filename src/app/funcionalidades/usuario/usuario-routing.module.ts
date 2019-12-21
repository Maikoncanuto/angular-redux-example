import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
    { path: '', component: ViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}