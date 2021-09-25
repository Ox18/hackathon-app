import React from 'react'

import { InputText } from '../../components/Input/InputText'

export const RegisterCompanyScreen = () => {
    return (
        <div>
            <form>
                <InputText placeholder="Nombre" label="Nombre" />
                <InputText placeholder="LinkedIn" label="LinkedIn" />
                <InputText placeholder="País" label="País" />
                <InputText placeholder="Página Web" label="Página Web" />
            </form>
        </div>
    )
}
