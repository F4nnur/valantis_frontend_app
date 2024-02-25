import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

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
        const { elems } = data;
        try {
            const response = await $api.post('', elems);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            console.log(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
