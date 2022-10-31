import styles from "./assets/css/Star.module.scss";

const Star = ({ id }) => {
  const Starpoint = () => {
    const result = [];
    for (let i = 1; i < 11; i++) {
      result.push(
        <input
          key={"star_input" + i}
          type="radio"
          name={id + "starpoint"}
          id={id + "starpoint_" + i}
          className={styles.Radio}
        />
      );
      result.push(
        <label
          key={"star_label" + i}
          htmlFor={id + "starpoint_" + i}
          className={styles.label}
          title={0.5 * i}
        >
          <span className={styles.blind}>{0.5 * i}점</span>
        </label>
      );
    }
    return result;
  };

  return (
    <div className={styles.container}>
      {Starpoint()}
      <span className={styles.star}></span>
    </div>
  );
};

export default Star;
