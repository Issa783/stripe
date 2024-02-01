import React from "react";
import styles from "../style.module.css"
import sublinks from "../data"
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
const SideBar = () => {
    const{isSideBarOpen,CloseSideBar} = useGlobalContext()
    return (
        <aside className={isSideBarOpen ?`${styles.sidebarwrapper} ${styles.show}` : styles.sidebarwrapper }>
           <div className={styles.sidebar}>
             <button className={styles.closebtn} onClick={CloseSideBar}>
                <FaTimes />
             </button>
             <div className={styles.sidebarlinks}>
                {sublinks.map((item,index) => {
                    const{links,page} = item;
                    return <article key={index}>
                        <h4>{page}</h4>
                        <div className={styles.sidebarsublinks}>
                            {links.map((link,index) => {
                                const{url,icon,label} = link
                                return <a key={index} href={url}>{icon}{label}</a>
                            })}
                        </div>
                    </article>
                })}
             </div>
           </div>
        </aside>
    )

}
export default SideBar