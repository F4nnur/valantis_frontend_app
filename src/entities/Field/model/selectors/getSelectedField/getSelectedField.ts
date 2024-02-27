import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getSelectedField = (state: StateSchema) => state?.filter.field;
