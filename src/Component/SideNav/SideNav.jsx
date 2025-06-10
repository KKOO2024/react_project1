// import { Link } from 'react-router-dom'
import Loginout from "./Loginout/Loginout";
import { Link } from "react-router-dom";
import styles from './SideNav.module.css';


export default  function SideNav({isLogin, toggleLogin}){

    if (isLogin == false) return(
        <nav>
            <ul className={styles.navUI}>
                <li className={styles.navlistUI}><div className={styles.navConDeny} >아이템 등록</div></li>
                <li className={styles.navlistUI}><div className={styles.navConDeny} >부식 선정 투표</div></li>
                <li className={styles.navlistUI}><Link className={styles.navCon} to={'/voteResult'}>투표 결과</Link></li>
                <li className={styles.footer}>
                    © 2025 MyCompany. All rights reserved.<br/>
                    "Terms of Service  Privacy Policy"

                </li>
            </ul>
            <Loginout className={styles.loginoutUI} isLogin={isLogin} onClick={toggleLogin}/>
        </nav>
    )


    return (
        <nav>
            <ul className={styles.navUI}>
                <li className={styles.navlistUI}><Link className={styles.navCon} to={'/registerItem'}>아이템 등록</Link></li>
                <li className={styles.navlistUI}><Link className={styles.navCon} to={'/vote'}>부식 선정 투표</Link></li>
                <li className={styles.navlistUI}><Link className={styles.navCon} to={'/voteResult'}>투표 결과</Link></li>
                <li className={styles.footer}>
                    © 2025 MyCompany. All rights reserved.<br/>
                    "Terms of Service  Privacy Policy"

                </li>
            </ul>
            <Loginout className={styles.loginoutUI} isLogin={isLogin} onClick={toggleLogin}/>
        </nav>
    );
}