import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    
    useEffect(function(){
        // Close nav when route changes
        setNavOpen(false)
        
        // Update nav color based on route
        if(locate === '/projects' || locate === '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])
    

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContext