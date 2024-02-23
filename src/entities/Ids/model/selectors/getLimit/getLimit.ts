import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getLimit = (state: StateSchema) => state?.ids?.limit || 50;
