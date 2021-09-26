import React from 'react'

interface ButtonComponentProps {
    text: string,
    color: string,
}

export const ButtonComponent:React.FC<ButtonComponentProps> = ({text, color}) => {
    return (
        <button className={color} type="submit">{text}</button>
    )
}