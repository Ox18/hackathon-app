import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { HambugerMenu } from '../../components/ButtonComponent/HambugerMenu'
import { FeedComponentUser } from '../../components/FeedComponent/FeedComponent'
import { Title, Titlesmall } from '../../components/Title/Title'
import { logout } from '../../redux/actions/auth'

import { IState } from "../../interfaces/IState"
import { IFeedMeUser } from '../../interfaces/IFeedMeUser'

import { getAllFeedMeUsers } from "../../redux/actions/feedmeUser"

export const NewFeedUser = () => {
    const state = useSelector((state: IState) => state);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    useEffect(() => {
        dispatch(getAllFeedMeUsers());
    }, [dispatch])

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
              { state.feedMeUser.loading && <div>Cargando...</div>}
              {
                  state.feedMeUser.list.map((item: IFeedMeUser) => {
                        return (
                            <FeedComponentUser
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                            />
                        )
                    })
                }
                </section>
            </div>
        )
    }
