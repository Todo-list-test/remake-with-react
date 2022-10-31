import { useState } from "react";
import Menu from "./Menu";
import styles from "./assets/css/OurMenu.scss";
import mieRamen from "./assets/img/img_mie_ramen.png";
import saladTahu from "./assets/img/img_salad_tahu.png";
import rotiBaker from "./assets/img/img_roti_baker.png";
import spaghetti from "./assets/img/img_spaghetti.png";

const OurMenu = () => {
  const [Foods, setFoods] = useState([
    {
      id: "menu-mie-ramen",
      name: "Mie Ramen",
      subname: "lorem ipsum",
      img: mieRamen,
      alt: "미에라면",
      cost: "20.2",
    },
    {
      id: "menu-salad-tahu",
      name: "Salad Tahu",
      subname: "lorem ipsum",
      img: saladTahu,
      alt: "샐러드타후",
      cost: "20.2",
    },
    {
      id: "menu-roti-baker",
      name: "Roti Baker",
      subname: "lorem ipsum",
      img: rotiBaker,
      alt: "로티베이커",
      cost: "20.2",
    },
    {
      id: "menu-spaghetti",
      name: "Spaghetti",
      subname: "lorem ipsum",
      img: spaghetti,
      alt: "스파게티",
      cost: "20.2",
    },
  ]);

  return (
    <div className={styles.ourMenu}>
      <strong>Our menu</strong>
      <h2>Our Popular Menu</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur <br />
        aliquam elit ut aliquam
      </p>

      <ul className={styles.menu}>
        {Foods.map((food) => (
          <Menu
            key={food.name}
            id={food.id}
            name={food.name}
            subname={food.subname}
            img={food.img}
            alt={food.alt}
            cost={food.cost}
          />
        ))}
      </ul>
      <button className={styles.moreMenu}>More Menu</button>
    </div>
  );
};

export default OurMenu;
