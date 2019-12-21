import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';
import { UsuarioActionType } from '../actions/usuario.actions';

export interface State extends EntityState<Usuario> { }

export const adapter: EntityAdapter<Usuario> = createEntityAdapter<Usuario>();

export const initialState: State = adapter.getInitialState({});

//Continuar implementacao
export function reducer(
    state: State = initialState,
    action: UsuarioActionType
): State {
    /** 
    switch (action.type) {
        case UsuarioActionType.ADICIONAR_USUARIO: {
            return adapter.addOne(action.payload.usuario, state);
        }

        default: {
            return state;
        }
    }*/

    return null;
}

export const selectFeature = createFeatureSelector<State>('usuario');

export const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal
} = adapter.getSelectors(selectFeature);
