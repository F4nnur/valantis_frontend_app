import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getCurrentPage = (state: StateSchema) => state?.ids?.currentPage || 1;
