import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IdsReducer } from 'entities/Ids';
import { GoodsReducer } from 'entities/Goods';
import { StateSchema } from './stateSchema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ids: IdsReducer,
        goods: GoodsReducer,

    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']
