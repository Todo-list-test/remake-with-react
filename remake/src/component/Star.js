import './assets/css/Star.scss';

const Star = ({id}) => {

  const Starpoint = () => {
    const result = [];
    for (let i = 1; i < 11; i++) {
      result.push(
        <input key={"star_input" + i} type="radio" name={id + "starpoint"} id={id + "starpoint_" + i} className="star-radio" />
      );
      result.push(
        <label key={"star_label" + i} htmlFor={id + "starpoint_" + i}className="label-star" title={0.5 * i}><span className="blind">{0.5 * i}점</span></label>
      );
    }
    return result;
  };

  return (
    <div className="star-container">
      {Starpoint()}
      <span className="star"></span>
    </div>
  );
};

export default Star;
              