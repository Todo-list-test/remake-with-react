import './assets/css/reset.css';
import './assets/css/Menu.css';

const Menu = ({id, name, subname, img, alt, cost}) => {
  return (
    <li className="menu-large-container">
      <img src={img} alt={alt}/>
      <div className="menu-small-container">
        <div className="menu-contents">
          <b>{name}</b>
          <p>{subname}</p>
          <span className="cost">$ {cost}</span>
          <input type="checkbox" name="like" id={id} value="menus" />
          <label className="like" htmlFor={id}></label>
        </div>
      </div>
    </li>
  );
};

export default Menu;