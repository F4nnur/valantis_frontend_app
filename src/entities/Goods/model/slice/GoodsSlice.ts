import { createSlice } from '@reduxjs/toolkit';
import { GoodsSchema } from '../types/GoodsSchema';
import { GoodsService } from '../services/GoodsService';

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
                const uniqueIds = new Set(action.payload.result as string[]);
                state.goods = Array.from(uniqueIds).map((item: any) => ({
                    id: item.id,
                    brand: item.brand,
                    price: item.price,
                    product: item.product,
                }));
            })
            .addCase(GoodsService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: GoodsActions } = GoodsSlice;
export const { reducer: GoodsReducer } = GoodsSlice;
