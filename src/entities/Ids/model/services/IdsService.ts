import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface IdsProps {
    action: string;
    params?: object;
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const IdsService = createAsyncThunk(
    'get_ids',
    async (data: IdsProps, thunkAPI) => {
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