import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { InputText } from '../../components/Input/InputText';

import { IFormSubmitLogin } from '../../interfaces/IFormSubmit';

import { FormSchema } from '../../validators/FormSchema';

export const LoginScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormSubmitLogin>({
        resolver: yupResolver(FormSchema.login)
    });

    const onSubmit = (data: IFormSubmitLogin) => {
        alert("Formulario enviado");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText placeholder="example@gmail.com" label="Email" register={register("email")} error={errors?.email} />
                <InputText placeholder="******" label="Contraseña" type="password" register={register("password")} error={errors?.password} />
                <button type="submit">Loguearse</button>
            </form>
        </div>
    )
}
