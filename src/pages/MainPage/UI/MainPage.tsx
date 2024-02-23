import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { getIds } from 'entities/Ids/model/selectors/getIds';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { IdsService } from 'entities/Ids/model/services/IdsService';
import { Pagination } from 'widgets/Pagination';
import { GoodsList } from 'widgets/GoodsList';
import cls from './MainPage.module.scss';

const MainPage = memo(() => {
    const dispatch = useAppDispatch();
    const ids = useSelector(getIds);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 50;

    useEffect(() => {
        const offset = (currentPage - 1) * limit;
        const data = { action: 'get_ids', params: { offset, limit } };
        (async () => {
            const result = await dispatch(IdsService(data));
            if (result.meta.requestStatus === 'rejected') {
                dispatch(IdsService(data));
            }
        })();
    }, [dispatch, currentPage]);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    return (
        <div className={cls.MainPage}>
            {/* {ids && ids.map((id) => ( */}
            {/*    <div key={id}>{id}</div> */}
            {/* ))} */}
            <GoodsList data={ids} />
            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
});

export default MainPage;
