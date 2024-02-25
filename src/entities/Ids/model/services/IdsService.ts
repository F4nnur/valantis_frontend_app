import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { IdsActions } from '../slice/IdsSlice';

interface Params {
    offset: number
    limit: number
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

export const IdsService = createAsyncThunk(
    'get_ids',
    async (data: IdsProps, thunkAPI) => {
        const state = thunkAPI.getState();
        try {
            const response = await $api.post('', data);

            if (!response.data) {
                throw new Error();
            }
            const uniqueIds = new Set();

            const uniqueGoods = response.data.result.filter((elem: string) => {
                if (uniqueIds.has(elem)) {
                    return false;
                }
                uniqueIds.add(elem);
                return true;
            });
            if (uniqueGoods.length < 50) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                thunkAPI.dispatch(IdsActions.setLimit(data.params.limit + state.ids.limit - uniqueGoods.length));
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            console.log(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
