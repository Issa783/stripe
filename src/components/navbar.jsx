import React from "react";
import styles from "../style.module.css"
import logo from "../images/logo.svg"
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const NavBar = () => {
    const {OpenSideBar,OpenSubMenu,CloseSubMenu} = useGlobalContext()
    const DisplaySubMenu = (e) => {
        const page = e.target.textContent;
        
        const tempBtn = e.target.getBoundingClientRect();

        const center = (tempBtn.left + tempBtn.right)/2
        
        const bottom = tempBtn.bottom - 3;
        OpenSubMenu(page,{center,bottom})
    }
    const hoverEvent=()=>{
      alert('hovered')
    }
    const handleSubmenu = (e) => {
      
        if(!e.target.classList.contains(styles.linkbtn)){
            CloseSubMenu()
        }
    }
    return (
        <nav className={styles.nav} onMouseOver={handleSubmenu}>
            <div className={styles.navcenter}>
               <div className={styles.navheader}>
                  <img src={logo} alt="Stripe" className={styles.navlogo}/>
                  <button className={`${styles.btn} ${styles.togglebtn}`} onClick={OpenSideBar}>
                    <FaBars />
                  </button>
               </div>
               <ul className={styles.navlinks}>
                  <li>
                    <button className={styles.linkbtn} style={{cursor:"pointer"}} onMouseOver={DisplaySubMenu}>products</button>
                  </li>
                  <li>
                    <button className={styles.linkbtn}  onMouseOver={DisplaySubMenu}>developers</button>
                  </li>
                  <li>
                    <button className={styles.linkbtn} onMouseOver={DisplaySubMenu}>company</button>
                  </li>
               </ul>
               <button className={`${styles.btn} ${styles.signinbtn}`}>
                Sign in
               </button>
            </div>
        </nav>
    )
 
}
export default NavBar