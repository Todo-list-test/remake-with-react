import styles from "./assets/css/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Be The Fastest In Delivery Your <i>Food</i>
        </h2>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet
        </p>
        <button className={styles.startBtn}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
