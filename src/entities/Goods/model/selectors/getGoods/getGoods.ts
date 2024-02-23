import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getGoods = (state: StateSchema) => state?.goods?.goods;
