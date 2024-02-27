import React, { Suspense, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { GoodsService } from 'entities/Goods/model/services/GoodsService';
import { getGoods } from 'entities/Goods/model/selectors/getGoods/getGoods';
import cls from './GoodsList.module.scss';
import Text from '../../../shared/UI/Text/Text';
import Loader from '../../../shared/UI/Loader/Loader';

interface GoodsListProps {
    data?: string[];
    offset?: number;
    limit?: number;
}
const GoodsList: React.FC<GoodsListProps> = (props) => {
    const { data, offset, limit } = props;
    const dispatch = useAppDispatch();
    const goods = useSelector(getGoods);

    useEffect(() => {
        if (data) {
            const goodsIds = { action: 'get_items', params: { ids: data } };
            dispatch(GoodsService({ elems: goodsIds }));
        }
    }, [dispatch, offset, limit, data]);
    return (
        <div className={cls.GoodsList}>
            <Suspense fallback={<Loader />}>
                {goods && goods.map((elem) => (
                    <div className={cls.ListItem} key={elem.id}>
                        <Text text={`ID: ${elem.id}`} />
                        <Text text={`Название: ${elem.product}`} />
                        <Text text={`Цена: ${elem.price}`} />
                        <Text text={`Бренд: ${elem.brand}`} />
                    </div>
                ))}
            </Suspense>
        </div>
    );
};

export default GoodsList;
