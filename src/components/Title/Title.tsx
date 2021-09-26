import React from 'react'

interface TitleComponentsProps{
    text: string;
}

export const Title:React.FC<TitleComponentsProps> = ({text}) => {
    return (
        <h1 className="titlelarge">{text}</h1>
    )
}
export const Titlesmall:React.FC<TitleComponentsProps> = ({text}) => {
    return (
        <h2 className="titlesmall">{text}</h2>
    )
}
export const Titlecompany:React.FC<TitleComponentsProps> = ({text}) => {
    return (
        <h3 className="titlecompany">{text}</h3>
    )
}