import React from 'react'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { Titlecompany } from '../Title/Title'

interface FeedComponentCompanyProps {
    id: number
    name: string
    description: string
}

export const FeedComponentCompany:React.FC<FeedComponentCompanyProps> = ({ id, name, description }) => {
    return (
        <div className="feed" key={id}>
            <Titlecompany text={name} />
            <div className="description">
                <p>{description}
                </p>
                <div className="button-inscribir">
                    <ButtonComponent text="Editar" color="btn primary"/>
                    <ButtonComponent text="Eliminar" color="btn secondary"/>
                </div>
            </div>
        </div>
    )
}

interface FeedComponentUserProps {
    id: string;
    name: string;
    description: string;
}

export const FeedComponentUser:React.FC<FeedComponentUserProps> = ({ id, name, description }) => {
    return (
        <div className="feed" key={id}>
            <Titlecompany text={name} />
            <div className="description">
                <p>{description}</p>
                <div className="button-inscribir">
                    <ButtonComponent text="Inscribirme" color="btn primary"/>
                </div>
            </div>
        </div>
    )
}
