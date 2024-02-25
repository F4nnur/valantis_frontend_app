import React, { useCallback } from 'react';
import Button from 'shared/UI/Button/Button';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import { useSelector } from 'react-redux';
import cls from './Pagination.module.scss';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { IdsActions } from '../../../entities/Ids/model/slice/IdsSlice';
import { getLimit } from '../../../entities/Ids/model/selectors/getLimit/getLimit';

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, onPageChange } = props;
    const dispatch = useAppDispatch();
    const limit = useSelector(getLimit);

    const handlePreviousClick = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange, dispatch]);

    const handleNextClick = useCallback(() => {
        onPageChange(currentPage + 1);
        dispatch(IdsActions.setOffset((currentPage - 1) * limit));
        dispatch(IdsActions.setLimit(50));
    }, [currentPage, onPageChange, dispatch]);

    return (
        <div className={cls.Pagination}>
            <Button onClick={handlePreviousClick} disabled={currentPage === 1}>Previous</Button>
            <Text text={`Page ${currentPage}`} theme={TextTheme.PRIMARY} />
            <Button onClick={handleNextClick}>Next</Button>
        </div>
    );
};

export default Pagination;
