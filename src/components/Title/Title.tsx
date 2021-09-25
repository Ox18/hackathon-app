import React from 'react'

interface TitleComponentsProps{
    text: string;
}

export const Title:React.FC<TitleComponentsProps> = ({text}) => {
    return (
        <h1 className="titleH1">{text}</h1>
    )
}