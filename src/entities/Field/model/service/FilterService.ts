import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { IdsActions } from '../../../Ids/model/slice/IdsSlice';

interface Params {
    field?: string
}
interface IdsProps {
    action: string;
    params: Params;
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const FilterService = createAsyncThunk(
    'filter',
    async (data: IdsProps, thunkAPI) => {
        const state = thunkAPI.getState();
        try {
            const response = await $api.post('', data);

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(IdsActions.setResult(response.data));
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            console.log(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
