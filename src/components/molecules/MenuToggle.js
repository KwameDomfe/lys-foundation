import React, { useState } from 'react'
import menuClose from '../../svgs/menu/menu-close-icon.svg'
import menuOpen from '../../images/placeholders/regular_images/sky.jpg'

const MenuToggle = (props) => {
    // Props
    const {onClick, toggleMenu} = props

    return (
        <figure id="menu__Toggle"
            className="flex items-center justify-center 
                w2-00 h2-00 pa0-25 dn-m
                ba bw1 b--white br-100 pointer"
            onClick={onClick}
        >
            <img src = {toggleMenu ? 
                    menuOpen 
                    : menuClose
                }
                alt="Menu Toggle"
                className="tc br-50"
                
            />
        </figure>
    )
}

export default MenuToggle