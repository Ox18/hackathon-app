import React, { useState } from 'react'
import Hamburger from 'hamburger-react';

export const HambugerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Hamburger toggled={isOpen} toggle={setOpen}/>
    )
}
