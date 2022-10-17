import './assets/css/reset.css';
import './assets/css/WhatTheSay.css';
import Star from './Star.js';
import profile1 from "./assets/img/img_profile_1.png";
import profile2 from "./assets/img/img_profile_2.png";

const WhatTheSay = () => {
  return (
    <div className="what-the-say">
      <div className="what-the-say-img"></div>
      <div>
        <strong>What the say</strong>
        <h2>What Our customers Say About Us</h2>

        <div className="what-the-say-review">
          <ul className="review-container">
            <li className="review">
              <div className="profile">
                <img src={profile1} alt="프로필사진" />
                <em className="name">Naura Silvana</em>
                <Star />
                
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."</p>
            </li>

            <li className="review">
              <div className="profile">
                <img src={profile2} alt="프로필사진" />
                <em className="name">Azura</em>
                <Star />
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."</p>
            </li>
          </ul>

          <input type="radio" name="page" id="review_page_1" className="page-radio" />
          <input type="radio" name="page" id="review_page_2" className="page-radio" />
          <input type="radio" name="page" id="review_page_3" className="page-radio" />
          <label htmlFor="review_page_1" className="review-page" title="1page"><span className="blind">1페이지</span></label>
          <label htmlFor="review_page_2" className="review-page" title="2page"><span className="blind">2페이지</span></label>
          <label htmlFor="review_page_3" className="review-page" title="3page"><span className="blind">3페이지</span></label>
        </div>

      </div>
    </div>
  );
};

export default WhatTheSay;