import { IdsSchema } from 'entities/Ids';
import { GoodsSchema } from 'entities/Goods';

export interface StateSchema {
    ids: IdsSchema;
    goods: GoodsSchema
}

export type StateSchemaKey = keyof StateSchema;
