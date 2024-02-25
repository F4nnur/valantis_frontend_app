import React from 'react';
import cls from './Select.module.scss';

interface SelectProps {
    title: string;
    optionsList: string[];
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
                <option disabled>{title}</option>
                {optionsList.map((elem) => (
                    <option value={elem}>{elem}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
