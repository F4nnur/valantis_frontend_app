import React, { InputHTMLAttributes, memo } from 'react';
import clsx from 'clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <input
            className={clsx(cls.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});

export default Input;
