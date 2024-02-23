import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface GoodsProps {
    action: string;
    params?: object;
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const GoodsService = createAsyncThunk(
    'get_goods',
    async (data: GoodsProps, thunkAPI) => {
        try {
            const response = await $api.post('', data);

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
