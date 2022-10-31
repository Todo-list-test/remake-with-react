import styles from "./assets/css/HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <div className={styles.howItWorks}>
      <strong>How it works</strong>
      <h2>What We Serve</h2>
      <p>
        Product Quality Is Our Priority, And Always Guarantees Halal And Safety
        Until It Is In Your Hands
      </p>
      <div className={styles.strength}>
        <div className={styles.easyToOrder}>
          <em>Easy To Order</em>
          <p>You only order through the app</p>
        </div>
        <div className={styles.fastestDelivery}>
          <em>Fastest Delivery</em>
          <p>Delivery will be on time</p>
        </div>
        <div className={styles.bestQuality}>
          <em>Best Quality</em>
          <p>The best quality of food for you</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
