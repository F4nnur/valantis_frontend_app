import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdsSchema } from '../type/IdsSchema';
import { IdsService } from '../services/IdsService';

const initialState: IdsSchema = {
    result: undefined,
    error: undefined,
    isLoading: false,
    offset: 0,
    limit: 50,
    currentPage: 1,

};

export const IdsSlice = createSlice({
    name: 'ids',
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload.result;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },

        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(IdsService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(IdsService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload.result;
            })
            .addCase(IdsService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: IdsActions } = IdsSlice;
export const { reducer: IdsReducer } = IdsSlice;
