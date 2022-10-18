import './assets/css/reset.css';
import './assets/css/Star.css';

const Star = ({id}) => {
  return (
    <div className="star-container">
      <label htmlFor={{id} + "starpoint_1"}className="label-star" title="0.5"><span className="blind">0.5점</span></label>
      <label htmlFor={{id} + "starpoint_2"} className="label-star" title="1.0"><span className="blind">1.0점</span></label>
      <label htmlFor={{id} + "starpoint_3"} className="label-star" title="1.5"><span className="blind">1.5점</span></label>
      <label htmlFor={{id} + "starpoint_4"} className="label-star" title="2.0"><span className="blind">2.0점</span></label>
      <label htmlFor={{id} + "starpoint_5"} className="label-star" title="2.5"><span className="blind">2.5점</span></label>
      <label htmlFor={{id} + "starpoint_6"} className="label-star" title="3.0"><span className="blind">3.0점</span></label>
      <label htmlFor={{id} + "starpoint_7"} className="label-star" title="3.5"><span className="blind">3.5점</span></label>
      <label htmlFor={{id} + "starpoint_8"} className="label-star" title="4.0"><span className="blind">4.0점</span></label>
      <label htmlFor={{id} + "starpoint_9"} className="label-star" title="4.5"><span className="blind">4.5점</span></label>
      <label htmlFor={{id} + "starpoint_10"} className="label-star" title="5.0"><span className="blind">5.0점</span></label>
      <input type="radio" name="starpoint" id={{id} + "starpoint_1"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_2"}
      className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_3"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_4"}className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_5"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_6"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_7"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_8"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_9"} className="star-radio" />
      <input type="radio" name="starpoint" id={{id} + "starpoint_10"} className="star-radio" />
      <span className="star"></span>
    </div>
  );
};

export default Star;
              