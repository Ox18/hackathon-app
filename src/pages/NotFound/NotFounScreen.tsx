import React from 'react'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'

export const NotFounScreen = () => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1>404</h1>
                <h5>Ops! Page not found :(</h5>
                <ButtonComponent text="Back to Home" color="btn primary"/>
            </div>
        </div>
    )
}
