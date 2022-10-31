import styles from "./assets/css/Review.module.scss";
import Star from "./Star.js";

const Review = ({ id, name, profile, content }) => {
  return (
    <li className={styles.review}>
      <div className={styles.profile}>
        <img src={profile} alt="프로필사진" />
        <em className={styles.name}>{name}</em>
        <Star key={id} id={id} />
      </div>
      <p>{content}</p>
    </li>
  );
};

export default Review;
