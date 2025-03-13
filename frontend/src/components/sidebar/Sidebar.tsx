import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { userinfo } from "../../utils/axiosInstance";
import { firstLettre } from "../../utils/helprs";
import styles from './sidebar.module.css';
import { MdLogout } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { PiHandCoinsLight } from "react-icons/pi";

export default function Sidebar({className}) {
    const { token, logout } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (!token) return;

        const getUserInfo = async () => {
            try {
                const res = await userinfo(token);
                setUser(res.data);
            } catch (error) {
                console.error("Error fetching Data:", error);
            }
        };

        getUserInfo();
    }, [token]);

    return (
        <div className={className}>
            <div className={styles.links}>
                <ul>
                    <li className={location.pathname ==="/home/dashboard" || location.pathname ==="/home" ? styles.active : ""}><Link to="dashboard"><LuLayoutDashboard /> Dashboard</Link></li>
                    <li className={location.pathname ==="/home/income" ? styles.active : ""}><Link to="income"><IoWalletOutline />Income</Link></li>
                    <li className={location.pathname ==="/home/expense" ? styles.active : ""}><Link to="expense"><PiHandCoinsLight />Expense</Link></li>
                    <li onClick={logout} className={styles.logout}><MdLogout />Logout</li>
                </ul>
            </div>

            <div className={styles.user}>
                {user ? (
                    <div className={styles.user_c}>
                        <div className={styles.circul}>{firstLettre(user[0])}</div>
                        <div>
                            <p className={styles.username}>{user[0]}</p>
                            <p className={styles.email}>{user[1]}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            
        </div>
    );
}
