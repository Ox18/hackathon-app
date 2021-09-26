import React from 'react'
import { useDispatch } from 'react-redux'

import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { HambugerMenu } from '../../components/ButtonComponent/HambugerMenu'
import { FeedComponentUser } from '../../components/FeedComponent/FeedComponent'
import { Title, Titlesmall } from '../../components/Title/Title'
import { logout } from '../../redux/actions/auth'

export const NewFeedUser = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="container-feed">
            <header>
                <div className="titles">
                    <Title text="Hackathon Gentleman Programming 2021" />
                    <Titlesmall text="Bootcamps" />
                </div>
                <div className="button-header">
                     <ButtonComponent text="Cerrar sesion" color="btn secondary" onClick={handleLogout} />
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
