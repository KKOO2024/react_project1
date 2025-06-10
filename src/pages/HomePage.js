import styles from './HomePage.module.css';
import VoteBanner from '../Component/common/VoteBanner';

function HomePage() {
  

  return (
    <div className='app-container'>
      <VoteBanner className={styles.con1}></VoteBanner>
      <div className={styles.con2}>
        <div className={styles.subCon1}>
          <p className={styles.subConTitle}>Notice</p>
        </div>
        <div className={styles.subCon2}>
          <p className={styles.subConTitle}>News</p>
        </div>
      </div>
      <div className={styles.con3}>
          <p className={styles.subConTitle}>Popular</p>
      </div>
      <div className={styles.con4}>
          <p className={styles.subConTitle}>Disliked</p>
      </div>
    </div>
  );
}

export default HomePage;
