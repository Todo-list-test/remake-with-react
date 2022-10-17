import './assets/css/reset.css';
import './assets/css/OurMenu.css';
import mieRamen from "./assets/img/img_mie_ramen.png";
import saladTahu from "./assets/img/img_salad_tahu.png";
import rotiBaker from "./assets/img/img_roti_baker.png";
import spaghetti from "./assets/img/img_spaghetti.png";

const OurMenu = () => {
  return (
    <div className="our-menu">
      <strong>Our menu</strong>
      <h2>Our Popular Menu</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur <br />
        aliquam elit ut aliquam
      </p>

      <ul className="menu">
        <li className="menu-large-container">
          <img src={mieRamen} alt="미에라멘"/>
          <div className="menu-small-container">
            <div className="menu-contents">
              <b>Mie Ramen</b>
              <p>lorem ipsum</p>
              <span className="cost">$ 20.2</span>
              <input type="checkbox" name="like" id="menu-mie-ramen" value="menus" />
              <label className="like" htmlFor="menu-mie-ramen"></label>
            </div>
          </div>
        </li>

        <li className="menu-large-container">
          <img src={saladTahu} alt="샐러드타후"/>
          <div className="menu-small-container">
            <div className="menu-contents">
              <b>Salad Tahu</b>
              <p>lorem ipsum</p>
              <span className="cost">$ 20.2</span>
              <input type="checkbox" name="like" id="menu-salad-tahu" value="menus" />
              <label className="like" htmlFor="menu-salad-tahu"></label>
            </div>
          </div>
          </li>

        <li className="menu-large-container">
          <img src={rotiBaker} alt="로티베이커" />
          <div className="menu-small-container">
            <div className="menu-contents">
              <b>Roti Baker</b>
              <p>lorem ipsum</p>
              <span className="cost">$ 20.2</span>
              <input type="checkbox" name="like" id="menu-roti-baker" value="menus" />
              <label className="like" htmlFor="menu-roti-baker"></label>
            </div>
          </div>
        </li>

        <li className="menu-large-container">
          <img src={spaghetti} alt="스파게티" />
          <div className="menu-small-container">
            <div className="menu-contents">
              <b>Spaghetti</b>
              <p>lorem ipsum</p>
              <span className="cost">$ 20.2</span>
              <input type="checkbox" name="like" id="menu-spaghetti" value="menus" />
              <label className="like" htmlFor="menu-spaghetti"></label>
            </div>
          </div>
        </li>
      </ul>
      <button className="more-menu">
        More Menu
      </button>
    </div>
  );
};

export default OurMenu;