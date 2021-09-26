import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { HambugerMenu } from '../../components/ButtonComponent/HambugerMenu'
import { FeedComponentCompany } from '../../components/FeedComponent/FeedComponent'
import { Title, Titlesmall } from '../../components/Title/Title'
import { IState } from '../../interfaces/IState'

import { logout } from "../../redux/actions/auth"
import { getAllFeedMeCompany } from '../../redux/actions/feedmeCompany'

import { IFeedMeCompany } from "../../interfaces/IFeedMeCompany"

export const NewFeedCompany = () => {
    const state = useSelector((state: IState) => state);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    useEffect(() => {
        dispatch(getAllFeedMeCompany());
    }, [dispatch])

    return (
        <div className="container-feed">
            <header>
                <div className="titles">
                    <Title text="Hackathon Gentleman Programming 2021" />
                    <Titlesmall text="Bootcamps" />
                </div>
                <div className="button-header">
                     <ButtonComponent text="Crear Bootcamp" color="btn primary"/>
                     <ButtonComponent text="Cerrrar sesion" color="btn secondary" onClick={handleLogout}/>
                </div>
                <div className="toggle-menu">
                    <HambugerMenu />
                </div>
            </header>
            <section className="bootcamps">
            { state.feedMeCompany.loading && <div>Cargando...</div>}
              {
                  state.feedMeCompany.list.map((item: IFeedMeCompany) => {
                        return (
                            <FeedComponentCompany
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
