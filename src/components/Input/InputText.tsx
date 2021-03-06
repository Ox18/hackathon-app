import React from 'react'

import { IInputError } from '../../interfaces/IInputError'

interface InputTextProps {
    type?: string;
    label?: string;
    error?: IInputError;
    register?: any;
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, error, register, placeholder, type = "text" }) => {
    return (
        <div className="input-box">
            <div className="label">{label}</div>
            <input type={type} placeholder={placeholder} {...register} error={error} />
            {error && <div className="label-error">{error.message}</div>}
        </div>
    )
}