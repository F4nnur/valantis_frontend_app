import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { Good } from '../types/GoodsSchema';
import { IdsService } from '../../../Ids/model/services/IdsService';

interface Goods {
    action: string;
    params?: object;
}
interface GoodsProps {
    elems?: Goods,
    limit?: number,
    offset?: number
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const GoodsService = createAsyncThunk(
    'get_goods',
    async (data: GoodsProps, thunkAPI) => {
        const { elems, offset, limit } = data;
        try {
            const response = await $api.post('', elems);

            if (!response.data) {
                throw new Error();
            }
            const uniqueIds = new Set();

            const uniqueGoods = response.data.result.filter((elem: Good) => {
                if (uniqueIds.has(elem.id)) {
                    return false;
                }
                uniqueIds.add(elem.id);
                return true;
            });
            if (uniqueGoods.length < 50) {
                const request = {
                    action: 'get_ids',
                    params: { offset, limit: limit && limit + 50 - uniqueGoods.length },
                };
                await thunkAPI.dispatch(IdsService(request));
                const response = await $api.post('', elems);
                return response.data;
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            console.log(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
