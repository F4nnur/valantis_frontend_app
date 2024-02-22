import { IdsSchema } from 'entities/Ids';

export interface StateSchema {
    ids: IdsSchema
}

export type StateSchemaKey = keyof StateSchema;
