import React from 'react';
import cls from './Select.module.scss';

interface SelectProps {
    title?: string;
    optionsList?: string[] | null[] | number[];
    handleSelectedOption: (value: string) => void;

}
const Select = (props: SelectProps) => {
    const { title, optionsList, handleSelectedOption } = props;
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectedOption(e.target.value);
    };
    return (
        <div className={cls.Select}>
            <select onChange={handleSelectChange}>
                <option>{title}</option>
                {optionsList && optionsList.map((elem) => {
                    if (elem === null) {
                        return;
                    }
                    // eslint-disable-next-line consistent-return
                    return (
                        <option value={elem}>{elem}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
