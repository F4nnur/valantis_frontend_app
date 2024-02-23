import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getOffset = (state: StateSchema) => state?.ids?.offset || 0;
