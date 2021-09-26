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

import imagen from '../../assets/images/dev.svg';

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
                <Title text="Ingrese datos del usuario"/>
            </header>
            <div className="flex-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <InputText  label="Nombre" register={register("name")} error={errors?.name} />
                        <InputText  label="LinkedIn" register={register("linkedIn")} error={errors?.linkedIn} />
                        <InputText  label="País" register={register("country")} error={errors?.country} />
                        <InputText  label="Repositorio" register={register("repository")} error={errors?.repository} />
                        <InputText  label="Contraseña" register={register("password")} error={errors?.password} />
                        <InputText  label="Ingrese contraseña nuevamente" register={register("repeatPassword")} error={errors?.repeatPassword} />
                    </div>
                    <InputTextTarea  label="Descripción" register={register("description")} error={errors?.description} />
                    <ButtonComponent text="Registrarse" color="btn primary"/>
                </form>
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}
