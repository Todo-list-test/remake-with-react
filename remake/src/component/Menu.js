import styles from "./assets/css/Menu.module.scss";
import { ReactComponent as Reservation } from "./assets/img/TEST.svg";

const Menu = ({ id, name, subname, img, alt, cost }) => {
  return (
    <li className={styles.largeContainer}>
      <img src={img} alt={alt} />

      <div className={styles.smallContainer}>
        <Reservation />
        <div className={styles.contents}>
          <b>{name}</b>
          <p>{subname}</p>
          <span className={styles.cost}>$ {cost}</span>
          <input type="checkbox" name="like" id={id} value="menus" />
          <label className={styles.like} htmlFor={id}></label>
        </div>
      </div>
    </li>
  );
};

export default Menu;
