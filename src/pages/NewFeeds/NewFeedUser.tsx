import React from 'react'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { HambugerMenu } from '../../components/ButtonComponent/HambugerMenu'
import { FeedComponentUser } from '../../components/FeedComponent/FeedComponent'
import { Title, Titlesmall } from '../../components/Title/Title'

export const NewFeedUser = () => {
    return (
        <div className="container-feed">
            <header>
                <div className="titles">
                    <Title text="Hackathon Gentleman Programming 2021" />
                    <Titlesmall text="Bootcamps" />
                </div>
                <div className="button-header">
                     <ButtonComponent text="Cerrrar sesion" color="btn secondary"/>
                </div>
                <div className="toggle-menu">
                    <HambugerMenu />
                </div>
            </header>
            <section className="bootcamps">
                <FeedComponentUser/>
            </section>
        </div>
    )
}
