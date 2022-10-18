import Review from "./Review";
import { useState } from 'react';
import './assets/css/reset.css';
import './assets/css/WhatTheSay.css';
import profile1 from "./assets/img/img_profile_1.png";
import profile2 from "./assets/img/img_profile_2.png";

const WhatTheSay = () => {
  const [Reviews, setReviews] = useState([{
    id : 1,
    name : 'Naura Silvana',
    profile : profile1,
    content : '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."'},
    {
      id : '2',
      name : 'Azura',
      profile : profile2,
      content : '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."'}
    ]);

  return (
    <div className="what-the-say">
      <div className="what-the-say-img"></div>
      <div>
        <strong>What the say</strong>
        <h2>What Our customers Say About Us</h2>

        <div className="what-the-say-review">
          <ul className="review-container">
            {Reviews.map(review => (
              <Review key={review.id} id={review.id} name={review.name} profile={review.profile} content={review.content} />
            ))}
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