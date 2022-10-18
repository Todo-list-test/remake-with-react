import './assets/css/reset.css';
import './assets/css/Footer.css';
import logo from './assets/img/img_let_us_food.png'
import insta from './assets/img/ico_insta.png'
import facebook from './assets/img/ico_facebook.png'
import twitter from './assets/img/ico_twitter.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer-flex">
          <div className="footer-layer">
            <h1 className="footer-let-us-food">
              <a className="flex" href="#Let-us-food">
                Let’sFood
              <img src={logo} alt="렛츠푸드로고" />
              </a>
            </h1>
            <p>Jalan Semangka Raya, Telaga<br /> 
            Murni, Cikarang Barat, Kab, Bekasi</p>
            <div className="sns-link">
              <a className="insta" href="#insta"><img src={insta} alt="인스타그램아이콘" /></a>
              <a className="facebook" href="#facebook"><img src={facebook} alt="페이스북아이콘" /></a>
              <a className="twitter" href="#twitter"><img src={twitter} alt="트위터아이콘" /></a>
            </div>
          </div>
          <ul className="footer-info">
            <li>
              <ul>
                <li><h3 className="title">Company</h3></li>
                <li>About Us</li>
                <li>Career</li>
                <li>How It Work</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><h3 className="title">Policy</h3></li>
                <li>FAQ</li>
                <li>Privacy</li>
                <li>Shipping</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><h3 className="title">Get In Touch</h3></li>
                <li>+62 896 7311 2766</li>
                <li>food@example.com</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
        </div>
      </footer>
  );
};

export default Footer;