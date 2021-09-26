import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoGoogle } from 'react-icons/io5'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { InputText } from '../../components/Input/InputText';

import { IFormSubmitLogin } from '../../interfaces/IFormSubmit';

import { FormSchema } from '../../validators/FormSchema';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Title } from '../../components/Title/Title';

export const LoginScreen:React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormSubmitLogin>({
        resolver: yupResolver(FormSchema.login)
    });

    const onSubmit = (data: IFormSubmitLogin) => {
        alert("Formulario enviado");
    }

    return (
        <div className="box-container">
            <header>
                <Title text="Hackathon Gentleman Programming 2021"/>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText placeholder="example@gmail.com" label="Email" register={register("email")} error={errors?.email} />
                <InputText placeholder="*****" label="Contraseña" type="password" register={register("password")} error={errors?.password} />
                <a href="/">¿Olvidaste tu contraseña?</a>
                <div>
                    <IoLogoGithub className="icon"/>
                    <IoLogoGoogle className="icon"/>
                    <IoLogoLinkedin className="icon"/>
                </div>
                <ButtonComponent text="Login" type="submit"/>
                <div className="registrer">
                    <a href="/">Registrar usuario</a>
                    <a href="/">Registrar empresa</a>
                </div>
            </form>
        </div>
    )
}
