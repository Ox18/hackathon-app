import React from 'react'

import { IInputError } from '../../interfaces/IInputError'

import { Input } from './Input'

interface InputTextProps {
    type?: string;
    label?: string;
    error?: IInputError;
    register?: any;
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, error, register, placeholder, type = "text" }) => {
    return (
        <div>
            <div>{label}</div>
            <Input type={type} placeholder={placeholder} register={register} error={error} />
            {error && <div>{error.message}</div>}
        </div>
    )
}
