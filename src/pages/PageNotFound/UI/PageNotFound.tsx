import React from 'react';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import cls from './PageNotFound.module.scss';

const PageNotFound = () => (
    <div className={cls.PageNotFound}>
        <Text text="Страница не найдена" theme={TextTheme.ERROR} />
    </div>
);

export default PageNotFound;
