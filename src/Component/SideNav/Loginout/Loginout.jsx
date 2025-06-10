import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from './Loginout.module.css';


function Loginout({isLogin, onClick}) {

  if (isLogin == false) return (
    <div className={styles.loginBox} onClick={onClick}><FaSignInAlt className={styles.loginUI}></FaSignInAlt>Login</div>
  );

  return (
    <div className={styles.loginBox} onClick={onClick}><FaSignOutAlt className={styles.loginUI}></FaSignOutAlt>Logout</div>
  );
}

export default Loginout