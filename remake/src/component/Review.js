import './assets/css/reset.css';
import './assets/css/Review.css';
import Star from './Star.js';

const Review = ({id, name, profile, content}) => {
  return (
    <li className="review">
      <div className="profile">
        <img src={profile} alt="프로필사진" />
        <em className="name">{name}</em>
        <Star key={id} id={id}/>
      </div>
      <p>{content}</p>
    </li>
)};

export default Review;