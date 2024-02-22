import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIds } from 'entities/Ids/model/selectors/getIds';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { IdsService } from '../../../entities/Ids/model/services/IdsService';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const ids = useSelector(getIds);
    useEffect(() => {
        const data = { action: 'get_ids', params: {} };
        dispatch(IdsService(data));
    }, [dispatch]);

    return (
        <div>
            Главная
        </div>
    );
};
export default MainPage;
