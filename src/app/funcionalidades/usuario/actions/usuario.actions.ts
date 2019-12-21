import { Action } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';

export enum UsuarioActionType {
    ADICIONAR_USUARIO = '[Usuario] - Adicionar Usuario'
}

export class AdicionarUsuario implements Action {
    readonly type = UsuarioActionType.ADICIONAR_USUARIO;

    constructor(public payload: {usuario: Usuario}) {
        
    }
}

//Continuar implementacao

