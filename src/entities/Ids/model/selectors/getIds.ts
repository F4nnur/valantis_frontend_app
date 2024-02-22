import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getIds = (state: StateSchema) => state?.ids?.result;
