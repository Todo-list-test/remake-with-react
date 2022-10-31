import Review from "./Review";
import { useState } from "react";

import styles from "./assets/css/WhatTheSay.module.scss";
import profile1 from "./assets/img/img_profile_1.png";
import profile2 from "./assets/img/img_profile_2.png";

const WhatTheSay = () => {
  const [Reviews, setReviews] = useState([
    {
      id: 1,
      name: "Naura Silvana",
      profile: profile1,
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."',
    },
    {
      id: 2,
      name: "Azura",
      profile: profile2,
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."',
    },
  ]);

  const Pages = () => {
    const result = [];
    for (let i = 1; i < Reviews.length + 1; i++) {
      result.push(
        <input
          key={"page_input_" + i}
          type="radio"
          name="page"
          id={"review_page_" + i}
          className={styles.radio}
        />
      );
      result.push(
        <label
          key={"page_label_" + i}
          htmlFor={"review_page_" + i}
          className={styles.page}
          title={i + "page"}
        >
          <span className={styles.blind}>{i}페이지</span>
        </label>
      );
    }
    return result;
  };

  return (
    <div className={styles.visible}>
      <div className={styles.whatTheSay}>
        <div className={styles.img}></div>
        <div>
          <strong>What the say</strong>
          <h2>What Our customers Say About Us</h2>

          <div className={styles.review}>
            <ul className={styles.container}>
              {Reviews.map((review) => (
                <Review
                  key={review.id}
                  id={review.id}
                  name={review.name}
                  profile={review.profile}
                  content={review.content}
                />
              ))}
            </ul>

            {Pages()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheSay;
