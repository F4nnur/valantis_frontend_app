import React, {
    memo, Suspense, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { IdsService } from 'entities/Ids/model/services/IdsService';
import { Pagination } from 'widgets/Pagination';
import { GoodsList } from 'widgets/GoodsList';
import { getIds } from 'entities/Ids/model/selectors/getIds/getIds';
import { getOffset } from 'entities/Ids/model/selectors/getOffset/getOffset';
import { getLimit } from 'entities/Ids/model/selectors/getLimit/getLimit';
import { IdsActions } from 'entities/Ids/model/slice/IdsSlice';
import { getCurrentPage } from 'entities/Ids/model/selectors/getCurrentPage/getCurrentPage';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const ids = useSelector(getIds);
    const offset = useSelector(getOffset);
    const limit = useSelector(getLimit);
    const currentPage = useSelector(getCurrentPage);

    useEffect(() => {
        const data = { action: 'get_ids', params: { offset, limit } };
        dispatch(IdsService(data));
    }, [dispatch, limit, offset, currentPage]);

    const handlePageChange = useCallback((page: number) => {
        dispatch(IdsActions.setCurrentPage(page));
    }, [dispatch]);

    return (
        <div className={cls.MainPage}>
            <GoodsList data={ids} offset={offset} limit={limit} />
            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default MainPage;
