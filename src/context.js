import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'
const AppContext = createContext()
export const AppProvider = ({children}) => {
    const[isSideBarOpen,setIsSideBarOpen] = useState(true)
    const[isSubMenuOpen,setIsSubMenuOpen] = useState(false)
    const[location,setLocation] = useState({})
    const[page,setPage] = useState({page:'',links:[]})
    const OpenSideBar = () => {
        setIsSideBarOpen(true)
    }
    const CloseSideBar = () => {
        setIsSideBarOpen(false)
    }
    const OpenSubMenu = (text,coordinates) => {
        const page = sublinks.find((link)=> link.page === text)
        
        setPage(page)
        setLocation(coordinates)
        setIsSubMenuOpen(true)
      
    }
    const CloseSubMenu = () => {
        setIsSubMenuOpen(false)
    }
        return <AppContext.Provider value={{isSubMenuOpen,isSideBarOpen,
            OpenSubMenu,OpenSideBar,CloseSubMenu,CloseSideBar,location,page
        }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return  useContext(AppContext)
}
