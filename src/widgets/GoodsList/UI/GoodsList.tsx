import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { GoodsService } from 'entities/Goods/model/services/GoodsService';
import { IdsService } from 'entities/Ids/model/services/IdsService';
import { getGoods } from 'entities/Goods/model/selectors/getGoods/getGoods';
import cls from './GoodsList.module.scss';
import Text from '../../../shared/UI/Text/Text';

interface GoodsListProps {
    data?: string[]
}
const GoodsList: React.FC<GoodsListProps> = (props) => {
    const { data } = props;
    const dispatch = useAppDispatch();
    const goods = useSelector(getGoods);
    console.log(goods);

    useEffect(() => {
        if (data) {
            const goodsIds = { action: 'get_items', params: { ids: data } };
            (async () => {
                const result = await dispatch(GoodsService(goodsIds));
                if (result.meta.requestStatus === 'rejected') {
                    dispatch(IdsService(goodsIds));
                }
            })();
        }
    }, [dispatch, data]);
    return (
        <div className={cls.GoodsList}>
            {goods && goods.map((elem, index) => (
                <div className={cls.ListItem}>
                    <Text text={`ID: ${elem.id}`} />
                    <Text text={`Название: ${elem.product}`} />
                    <Text text={`Цена: ${elem.price}`} />
                    <Text text={`Бренд: ${elem.brand}`} />
                </div>
            ))}
        </div>
    );
};

export default GoodsList;
