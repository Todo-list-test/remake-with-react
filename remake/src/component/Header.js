import './assets/css/Header.css';
import './assets/css/reset.css';
import logo from './assets/img/img_let_us_food.png'
import search from './assets/img/ico_search.png'
import shopping from './assets/img/ico_shopping_basket.png'
import sign from './assets/img/ico_sign_in.png'

const Header = () => {
  return (
    <header>
      <div className="flex">
        <h1 className="header-let-us-food">
          <a className="flex" href="#Let-us-food">
              Let’sFood
            <img src={logo} alt="렛츠푸드로고" />
          </a>
        </h1>
      <nav className="header-menu flex">
        <a href="#Home">Home</a>
        <a href="#Menu">Menu</a>
        <a href="#How_it_works">How it works</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </nav>
      <a className="search-ico" href="#search">
        <img src={search} alt="검색" />
      </a>
      <a className="shopping-ico" href="#shopping">
        <span className="shopping-alarm"><small>2</small></span>
        <img  src={shopping} alt="장바구니" />
      </a>

      <button className="sign-in flex">
        <img className="login-ico" src={sign} alt="로그인" />
        Sign in
      </button>
      </div>
    </header>
  );
};

export default Header;