import React from 'react'

interface ButtonComponentProps {
    text: string,
    type: string
}

export const ButtonComponent:React.FC<ButtonComponentProps> = ({text}) => {
    return (
        <button className="btn" type="submit">{text}</button>
    )
}