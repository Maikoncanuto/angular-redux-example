import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { 
        path: 'usuarios', 
        loadChildren: () => import('./funcionalidades/usuario/usuario.module').then(m => m.UsuarioModule) 
    },
    {
        path: '**',
        loadChildren: () => import('./funcionalidades/not-found/not-found.module').then(not => not.NotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }