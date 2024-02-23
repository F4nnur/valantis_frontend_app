import { createSlice } from '@reduxjs/toolkit';
import { Good, GoodsSchema } from '../types/GoodsSchema';
import { GoodsService } from '../services/GoodsService';
import loader from '../../../../shared/UI/Loader/Loader';

const initialState: GoodsSchema = {
    goods: undefined,
    error: undefined,
    isLoading: false,
};

export const GoodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GoodsService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(GoodsService.fulfilled, (state, action) => {
                state.isLoading = false;

                const uniqueIds = new Set();

                const uniqueGoods = action.payload.result.filter((elem: Good) => {
                    if (uniqueIds.has(elem.id)) {
                        return false;
                    }
                    uniqueIds.add(elem.id);
                    return true;
                });

                state.goods = uniqueGoods;
            })
            .addCase(GoodsService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: GoodsActions } = GoodsSlice;
export const { reducer: GoodsReducer } = GoodsSlice;
