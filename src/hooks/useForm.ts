import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    const handleSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return { values, handleInputChange, handleSelectChange, reset };

}