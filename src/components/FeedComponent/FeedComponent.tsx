import React from 'react'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { Titlecompany } from '../Title/Title'

export const FeedComponentCompany = () => {
    return (
        <div className="feed">
            <Titlecompany text="Nombre de la empresa" />
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque atque tenetur temporibus, ratione quos.
                </p>
                <div className="button-inscribir">
                    <ButtonComponent text="Editar" color="btn primary"/>
                    <ButtonComponent text="Eliminar" color="btn secondary"/>
                </div>
            </div>
        </div>
    )
}

export const FeedComponentUser = () => {
    return (
        <div className="feed">
            <Titlecompany text="Nombre de la empresa" />
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque atque tenetur temporibus, ratione quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium distinctio, repellat voluptates ullam molestiae quidem eveniet recusandae laborum obcaecati.</p>
                <div className="button-inscribir">
                    <ButtonComponent text="Inscribirme" color="btn primary"/>
                </div>
            </div>
        </div>
    )
}
