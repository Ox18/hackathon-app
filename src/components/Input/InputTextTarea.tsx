import React from 'react'

import { IInputError } from '../../interfaces/IInputError'

interface InputTextTareaProps {
    label?: string;
    error?: IInputError;
    register?: any;
    placeholder?: string;
}

export const InputTextTarea: React.FC<InputTextTareaProps> = ({ label, error, register, placeholder}) => {
    return (
        <div>
            <div>{label}</div>
            <textarea placeholder={placeholder} {...register} />
            {error && <div>{error.message}</div>}
        </div>
    )
}
