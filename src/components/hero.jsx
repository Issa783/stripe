import React from "react";
import styles from "../style.module.css"
import phoneimg from "../images/phone.svg"
import { useGlobalContext } from "../context";
const Hero = () => {
    const {CloseSubMenu} = useGlobalContext()
    return(
        <section className={styles.hero} onMouseOver={CloseSubMenu}> 
            <div className={styles.herocenter}>
               <article className={styles.heroinfo}>
                <h1>Payments infrastructure for the internet</h1>
                <p>Millions of companies of all sizes-from startups to Fortune 500s-use Stripes software and APIS 
                    to accept payments, send payouts and manage their business online.
                </p>
                <button className={styles.btn}>Start now</button>
               </article>
               <article className={styles.heroimages}>
                 <img src={phoneimg} className={styles.phoneimg} />
               </article>
            </div>
        </section>
    )

}
export default Hero