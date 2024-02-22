import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../../../shared/api/api';

interface IdsProps {
    action: string;
    params?: object;
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
            console.log('error');
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
