import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './home.module.css';
import logo from '../../assets/iconwhite.png';

export default function Home() {
    // const {token, logout} = useContext(AuthContext)
    

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.icon}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.content}>
                <Outlet /> 
                  
            </div>
            
        </div>
        
    )
}
