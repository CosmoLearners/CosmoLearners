import { useMemo } from "react";
import "./On.css";

const On = ({
  earnWhatYouDeserveOurCoac,
  competitiveCompensation,
  propHeight,
  propHeight1,
  propHeight2,
  propMarginTop,
}) => {
  const competitiveCompensationStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const earnWhatYouStyle = useMemo(() => {
    return {
      height: propHeight2,
      marginTop: propMarginTop,
    };
  }, [propHeight2, propMarginTop]);

  return (
    <div
      className="competitive-compensation"
      style={competitiveCompensationStyle}
    >
      <div
        className="competitive-compensation-child"
        style={rectangleDivStyle}
      />
      <div className="icon-container">
        <img
          className="one-on-one-1-icon1"
          loading="lazy"
          alt=""
          src="/oneonone-11@2x.png"
        />
      </div>
      <div className="competitive-compensation-parent">
        <b className="competitive-compensation1">{competitiveCompensation}</b>
        <div className="description-container">
          <div className="earn-what-you" style={earnWhatYouStyle}>
            {earnWhatYouDeserveOurCoac}
          </div>
        </div>
      </div>
    </div>
  );
};

export default On;
