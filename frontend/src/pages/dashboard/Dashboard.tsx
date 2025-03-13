import { IoWalletOutline } from "react-icons/io5"
import styles from "./dash.module.css"

export default function Dashboard() {
    // const {token, logout} = useContext(AuthContext)
    

    return (
        <div className={styles.container}>
            <div className={styles.total_c}>
                <div>
                    <div className={styles.logo_t}>
                        <IoWalletOutline />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Balance</p>
                        <h3>$7800</h3>
                    </div>
                </div>
                <div>
                    <div className={styles.logo_t}>
                        <IoWalletOutline />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Balance</p>
                        <h3>$7800</h3>
                    </div>
                </div>
                <div>
                    <div className={styles.logo_t}>
                        <IoWalletOutline />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Balance</p>
                        <h3>$7800</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
