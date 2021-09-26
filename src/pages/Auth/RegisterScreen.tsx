import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { InputText } from '../../components/Input/InputText';
import { InputTextTarea } from '../../components/Input/InputTextTarea'

import { IFormSubmitRegister } from '../../interfaces/IFormSubmit';

import { FormSchema } from '../../validators/FormSchema';

export const RegisterScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormSubmitRegister>({
        resolver: yupResolver(FormSchema.register)
    });

    const onSubmit = (data: IFormSubmitRegister) => {
        alert("Formulario enviado");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText placeholder="Nombre" label="Nombre" register={register("name")} error={errors?.name} />
                <InputText placeholder="LinkedIn" label="LinkedIn" register={register("linkedIn")} error={errors?.linkedIn} />
                <InputText placeholder="País" label="País" register={register("country")} error={errors?.country} />
                <InputText placeholder="Repositorio" label="Repositorio" register={register("repository")} error={errors?.repository} />
                <InputText placeholder="******" label="Contraseña" register={register("password")} error={errors?.password} />
                <InputText placeholder="******" label="Ingrese contraseña nuevamente" register={register("repeatPassword")} error={errors?.repeatPassword} />
                <InputTextTarea placeholder="Ingresa una breve descripcion" label="Descripción" register={register("description")} error={errors?.description} />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}
