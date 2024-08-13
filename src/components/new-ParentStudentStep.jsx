import "./new-ParentStudentStep.css";
import { useState } from 'react';
import DownArrow from './chevron-down-solid.svg';
import UpArrow from './chevron-up-solid.svg';


const ArrowStyle = { color: "white", height: "3vw", filter: "invert(100%)" }; 

const StudentParentStep = ({
  className = "",
  propBackgroundColor,
  image,
  propHeight,
  title,
  number,
  description,
  propWidth,
}) => {

  const [isDescriptionVisible, setDescriptionVisible] = useState(true);

  const toggleDescriptionVisibility = () => {
    setDescriptionVisible(!isDescriptionVisible);
  }

 

  return (
    <div className={`par-stu-step-container ${isDescriptionVisible ? 'expanded' : ''}`} style={{ backgroundColor: propBackgroundColor }} >
      <div className="par-stu-step-image-container">
        <img
          className="par-stu-step-pic"
          loading="lazy"
          alt=""
          src={image}
        />
      </div>
      {/* <div className="book-an-appointment-begin-by-f-wrapper"> */}
      <div className="par-stu-step-texts">
        <p className="par-stu-step-title-wrapper-outer">
          <span className="par-stu-step-title-wrapper-inner">
            <span className="book-an-appointment4" id="par-stu-step-title">
              {title}
            </span>
            <button className="par-stu-description-toggle-button" onClick={toggleDescriptionVisibility}>
              {isDescriptionVisible ? <img src={DownArrow} style={ArrowStyle} OnClick={toggleDescriptionVisibility} /> : <img src={UpArrow}  style={ArrowStyle} OnClick={toggleDescriptionVisibility} />}
            </button>
          </span>
        </p>
        {/* <p className="par-stu-step-title-wrapper-outer">
          <span className="par-stu-step-description">
            <span className="par-stu-step-title-wrapper-inner">&nbsp;</span>
          </span>
        </p> */}
        {isDescriptionVisible &&
          <p className="begin-by-filling-out-our-appli">
            <span className="par-stu-step-description">
              {/* <span> */}
              {description}
              {/* </span> */}
            </span>
          </p>
        }
      </div>
      <div className="par-stu-step-bookmark-container">
        <div className="par-stu-step-bookmark">
          <div className="par-stu-step-number"> {number}</div>
          <img className="par-stu-step-bookmark-icon" alt="" src="/new-vector-10.svg" />
        </div>
      </div>
    </div>
  );
};



export default StudentParentStep; 