import React, { useEffect, useRef, useState } from "react"
import styles from "../style.module.css"
import { useGlobalContext } from "../context";
const SubMenu = () => {
  const{isSubMenuOpen,location,page:{page,links}} = useGlobalContext()
  const container = useRef(null)
  const[columns,setColumns] = useState(`${styles.col2}`)
  useEffect(()=>{
      setColumns(`${styles.col2}`)
      const submenu = container.current;
      const{center,bottom} = location;
      submenu.style.left = `${center}px`
      submenu.style.top =`${bottom}px`
      if(links.length === 3){
        setColumns(`${styles.col3}`)
      }
      if(links.length > 3){
        setColumns(`${styles.col4}`)
      }
  },[location,links])
 
  return(
    <aside className={ isSubMenuOpen ? `${styles.submenu} ${styles.show}` : styles.submenu} ref={container}>
        <h4>{page}</h4>
        <div className={`${styles.submenucenter} ${columns}`}>
           {links.map((link,index)=>{
             const{label,icon,url} = link;
             return <a key={index} href={url} >{icon}{label}</a>
           })}
        </div>

    </aside>
  )
}
export default SubMenu