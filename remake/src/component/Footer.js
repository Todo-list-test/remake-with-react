import { useState } from "react";
import styles from "./assets/css/Footer.module.scss";
import logo from "./assets/img/img_let_us_food.png";
import insta from "./assets/img/ico_insta.png";
import facebook from "./assets/img/ico_facebook.png";
import twitter from "./assets/img/ico_twitter.png";

const Footer = () => {
  const [FooterMenu, setFooterMenu] = useState([
    {
      id: "FooterMenu1",
      title: "Company",
      list: ["About Us", "Career", "How It Work"],
    },
    {
      id: "FooterMenu2",
      title: "Policy",
      list: ["FAQ", "Privacy", "Shipping"],
    },
    {
      id: "FooterMenu3",
      title: "Get In Touch",
      list: ["+62 896 7311 2766", "food@example.com"],
    },
  ]);

  const Lists = (lists) => {
    const result = [];
    for (let i = 0; i < lists.length; i++) {
      result.push(<li key={lists[i]}>{lists[i]}</li>);
    }
    return result;
  };

  return (
    <footer>
      <div className={styles.Box}>
        <div className={styles.layer}>
          <h1 className={styles.LetUsFood}>
            <a className="flex" href="#Let-us-food">
              Let’sFood
              <img src={logo} alt="렛츠푸드로고" />
            </a>
          </h1>
          <p>
            Jalan Semangka Raya, Telaga
            <br />
            Murni, Cikarang Barat, Kab, Bekasi
          </p>
          <div className={styles.snsLink}>
            <a className={styles.insta} href="#insta">
              <img src={insta} alt="인스타그램아이콘" />
            </a>
            <a className={styles.facebook} href="#facebook">
              <img src={facebook} alt="페이스북아이콘" />
            </a>
            <a className={styles.twitter} href="#twitter">
              <img src={twitter} alt="트위터아이콘" />
            </a>
          </div>
        </div>
        <ul className={styles.Info}>
          {FooterMenu.map((menu) => (
            <li key={menu.id}>
              <ul>
                <li>
                  <h3 className={styles.title}>{menu.title}</h3>
                </li>
                {Lists(menu.list)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
