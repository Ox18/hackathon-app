import React from 'react'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { FeedComponentCompany } from '../../components/FeedComponent/FeedComponent'
import { Title, Titlesmall } from '../../components/Title/Title'

export const NewFeedCompany = () => {
    return (
        <div className="container-feed">
            <header>
                <div className="titles">
                    <Title text="Hackathon Gentleman Programming 2021" />
                    <Titlesmall text="Bootcamps" />
                </div>
                <div className="button-header">
                     <ButtonComponent text="Crear Bootcamp" color="btn primary"/>
                     <ButtonComponent text="Cerrrar sesion" color="btn secondary"/>
                </div>
            </header>
            <section className="bootcamps">
                <FeedComponentCompany />
            </section>
        </div>
    )
}
