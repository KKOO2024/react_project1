import { FaBars } from "react-icons/fa"
import {IoIosArrowBack} from "react-icons/io"
import styles from "./NavPopupBtn.module.css"

function NavPopupBtn({onClick, isOpen}) {
  return (
    <>
        <button onClick={onClick} className={styles.dmbutton}><FaBars className={styles.dmicon} /></button>
        {isOpen && (
            <div className={styles.NavPopupBtnON}><button className={styles.NavPopupBtn}><IoIosArrowBack onClick={onClick} className={styles.closeicon}></IoIosArrowBack ></button></div>
    )}
    </>
  )
}

export default NavPopupBtn;