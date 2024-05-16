import { useMemo } from "react";
import "./On1.css";

const On1 = ({
  oneOnOne1,
  craftIndividualizedStrate,
  ourCoachesDesignLearningS,
  propLeft,
  propTop,
  propLeft1,
  propWidth,
}) => {
  const on1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const featureDescriptionsStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  return (
    <div className="on-11" style={on1Style}>
      <div className="on-1-item" />
      <img
        className="one-on-one-1-icon2"
        loading="lazy"
        alt=""
        src={oneOnOne1}
      />
      <div className="feature-descriptions" style={featureDescriptionsStyle}>
        <b className="craft-individualized-strategie">
          {craftIndividualizedStrate}
        </b>
        <div className="our-coaches-design">{ourCoachesDesignLearningS}</div>
      </div>
    </div>
  );
};

export default On1;
