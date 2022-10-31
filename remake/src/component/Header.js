import { useState } from "react";
import styles from "./assets/css/Header.module.scss";
import logo from "./assets/img/img_let_us_food.png";
import search from "./assets/img/ico_search.png";
import shopping from "./assets/img/ico_shopping_basket.png";
import sign from "./assets/img/ico_sign_in.png";

const Header = () => {
  const [Links, setLinks] = useState([
    {
      id: "Link1",
      name: "Home",
    },
    {
      id: "Link2",
      name: "Menu",
    },
    {
      id: "Link3",
      name: "How it works",
    },
    {
      id: "Link4",
      name: "About",
    },
    {
      id: "Link5",
      name: "Contact",
    },
  ]);

  return (
    <header>
      <div className="flex">
        <h1 className={styles.LetUsFood}>
          <a className="flex" href="#Let-us-food">
            Let’sFood
            <img src={logo} alt="렛츠푸드로고" />
          </a>
        </h1>
        <nav className={styles.menu}>
          {Links.map((link) => (
            <a key={link.id} href={"#" + link.name}>
              {link.name}
            </a>
          ))}
        </nav>
        <a className={styles.searchIco} href="#search">
          <img src={search} alt="검색" />
        </a>
        <a className={styles.shoppingIco} href="#shopping">
          <span className={styles.shoppingAlarm}>2</span>
          <img src={shopping} alt="장바구니" />
        </a>

        <button className={styles.signIn}>
          <img className={styles.loginIco} src={sign} alt="로그인" />
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
