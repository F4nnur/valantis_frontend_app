import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { IdsReducer } from '../../../../entities/Ids/model/slice/IdsSlice';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ids: IdsReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']
