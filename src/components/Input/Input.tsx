import React from 'react'
import { IInputError } from '../../interfaces/IInputError'


interface InputProps {
    error?: IInputError;
    register?: any;
    type?: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ register, type, placeholder }) => {
    return (
        <>
            <input placeholder={placeholder} type={type} {...register} />
        </>
    )
}
