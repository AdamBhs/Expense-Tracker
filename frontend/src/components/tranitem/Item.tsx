
import styles from "./item.module.css"
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";


export default function Item({amount}) {
    
    return (
        <div className={styles.container}>
            <div className={styles.desc}>
                <h3>Shopping</h3>
                <p>17th Feb 2025</p>
            </div>
            {
             amount > 1000 ? 
                <div className={styles.statepos}> 
                    +${amount}<HiArrowTrendingUp />
                </div>   
                :
                <div className={styles.stateneg}> 
                    -${amount}<HiArrowTrendingDown />
                </div>
            }
                
        </div>
    )
}
