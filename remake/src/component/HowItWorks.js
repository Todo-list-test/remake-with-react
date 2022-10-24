import './assets/css/HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <strong>How it works</strong>
      <h2>What We Serve</h2>
      <p>Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands</p>
      <div className="strength flex">
        <div className="easy-to-order">
          <em>Easy To Order</em>
          <p>You only order through the app</p>
        </div>
        <div className="fastest-delivery">
          <em>Fastest Delivery</em>
          <p>Delivery will be on time</p>
        </div>
        <div className="best-quality">
          <em>Best Quality</em>
          <p>The best quality of food for you</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;