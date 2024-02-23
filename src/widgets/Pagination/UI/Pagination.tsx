import React, { useCallback } from 'react';
import Button from 'shared/UI/Button/Button';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import cls from './Pagination.module.scss';

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, onPageChange } = props;
    const handlePreviousClick = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange]);

    const handleNextClick = useCallback(() => {
        onPageChange(currentPage + 1);
    }, [currentPage, onPageChange]);

    return (
        <div className={cls.Pagination}>
            <Button onClick={handlePreviousClick} disabled={currentPage === 1}>Previous</Button>
            <Text text={`Page ${currentPage}`} theme={TextTheme.PRIMARY} />
            <Button onClick={handleNextClick}>Next</Button>
        </div>
    );
};

export default Pagination;
