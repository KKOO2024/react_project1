import NavPopupBtn from "./NavPopupBtn";
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';


export default function Header({isOpen, toggleNav}){
    return (
        <div className={styles.Header}>
            <NavPopupBtn className={styles.NavPopupBtnOFF} isOpen={isOpen} onClick={toggleNav} ></NavPopupBtn>
            <div className={styles.par}><Link to={'/'}>GSITM 부트캠프 10기 부식신청</Link></div>
        </div>
    )
}