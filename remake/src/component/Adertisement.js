import styles from './assets/css/Adertisement.module.scss';

const Adertisement = () => {
  return (
    <div className={styles.advertisement}>
      <em>Join our member and get discount up to 50%</em>
      <button>Sign Up</button>
    </div>
  );
};

export default Adertisement;