import React from 'react'

interface ButtonComponentProps {
    text: string,
    color: string,
    onClick?: () => void
}

export const ButtonComponent:React.FC<ButtonComponentProps> = ({text, color, onClick}) => {
    return (
        <button className={color} type="submit" onClick={onClick}>{text}</button>
    )
}