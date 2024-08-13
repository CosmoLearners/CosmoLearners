import PropTypes from "prop-types";
import "./CollegesList.css";

const CollegesList = ({ className = "" }) => {
  return (
    <div className={`colleges-list ${className}`}>
      <div className="best-colleges">
        <header className="image-7-parent">
          <img
            className="image-7-icon"
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
          <img
            className="image-8-icon"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className="image-9-icon"
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <img className="image-11-icon" alt="" src="/image-11@2x.png" />
          <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          <img
            className="image-13-icon"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </header>
        <img
          className="image-14-icon"
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="image-7-group">
          <img className="image-7-icon1" alt="" src="/image-7-1@2x.png" />
          <img className="image-8-icon1" alt="" src="/image-8-1@2x.png" />
        </div>
        <img className="image-9-icon1" alt="" src="/image-9-1@2x.png" />
        <img className="image-11-icon1" alt="" src="/image-11-1@2x.png" />
        <img className="image-12-icon1" alt="" src="/image-12-1@2x.png" />
        <div className="image-13-parent">
          <img className="image-13-icon1" alt="" src="/image-13-1@2x.png" />
          <img className="image-14-icon1" alt="" src="/image-14-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

CollegesList.propTypes = {
  className: PropTypes.string,
};

export default CollegesList;
