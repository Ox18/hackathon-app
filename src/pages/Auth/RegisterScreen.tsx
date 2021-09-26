import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';

import { startRegisterUser } from "../../redux/actions/auth"

import { InputText } from '../../components/Input/InputText';
import { InputTextTarea } from '../../components/Input/InputTextTarea'

import { IFormSubmitRegister } from '../../interfaces/IFormSubmit';

import { FormSchema } from '../../validators/FormSchema';
import { Title } from '../../components/Title/Title';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';

export const RegisterScreen = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<IFormSubmitRegister>({
        resolver: yupResolver(FormSchema.register)
    });

    const onSubmit = (data: IFormSubmitRegister) => {
        dispatch(startRegisterUser(data));
    }

    return (
        <div className="register-container">
            <header>
                <Title text="Ingrese datos del usuario" />
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <InputText placeholder="Nombre" label="Nombre" register={register("name")} error={errors?.name} />
                    <InputText placeholder="LinkedIn" label="LinkedIn" register={register("linkedIn")} error={errors?.linkedIn} />
                    <InputText placeholder="País" label="País" register={register("country")} error={errors?.country} />
                    <InputText placeholder="Repositorio" label="Repositorio" register={register("repository")} error={errors?.repository} />
                    <InputText placeholder="******" label="Contraseña" register={register("password")} error={errors?.password} />
                    <InputText placeholder="******" label="Ingrese contraseña nuevamente" register={register("repeatPassword")} error={errors?.repeatPassword} />
                </div>
                <InputTextTarea placeholder="Ingresa una breve descripcion" label="Descripción" register={register("description")} error={errors?.description} />
                <ButtonComponent text="Registrarse" type="submit"/>
            </form>
        </div>
    )
}
