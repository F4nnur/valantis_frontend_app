import React, { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Select from 'shared/UI/Select/Select';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { FieldService } from 'entities/Field/model/service/FieldService';
import { getFields } from 'entities/Field';
import { FieldActions } from 'entities/Field/model/slice/FieldSlice';
import { getSelectedField } from 'entities/Field/model/selectors/getSelectedField/getSelectedField';
import { FilterService } from 'entities/Field/model/service/FilterService';
import cls from './Filter.module.scss';

export interface FilterProps {
    className?: string;
    offset?: number;
    limit?: number
}
const Filter = (props: FilterProps) => {
    const {
        className,
        limit,
        offset,
    } = props;
    const criteriaList = ['brand', 'price', 'product'];
    const dispatch = useAppDispatch();
    const result = useSelector(getFields);
    const field = useSelector(getSelectedField);

    useEffect(() => {
        dispatch(FieldService({ action: 'get_fields', params: { field, offset, limit } }));
    }, [dispatch, limit, offset]);

    const handleCriteriaSelect = useCallback((elem: string) => {
        dispatch(FieldActions.setField(elem));
        dispatch(FieldService({ action: 'get_fields', params: { field: elem, offset, limit } }));
    }, [dispatch, offset, limit]);

    const handleElemSelect = useCallback((elem: string | number) => {
        dispatch(FilterService({ action: 'filter', params: { [String(field)]: Number.isNaN(+elem) ? elem : +elem } }));
    }, [dispatch, field]);
    return (
        <div className={clsx(cls.Filter, {}, [className])}>
            <Select title="Выберите критерий фильтрации" optionsList={criteriaList} handleSelectedOption={handleCriteriaSelect} />
            <Select title="Выберите поле" optionsList={result} handleSelectedOption={handleElemSelect} />
        </div>
    );
};

export default Filter;
