import { useMemo } from "react";
import "./Collaborate.css";

const Collaborate = ({
  collab3,
  collaborativeGroupClasses,
  learnTogether,
  cOSMOAlsoOffersTheOpportu,
  propLeft,
  propPadding,
  propFlex,
  propOverflow,
  propWidth,
  propGap,
  propHeight,
}) => {
  const collaborateStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const collabDescriptionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const collab3IconStyle = useMemo(() => {
    return {
      flex: propFlex,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propFlex, propOverflow, propWidth]);

  const achievementCelebrationStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const learnTogetherCOSMOContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="collaborate" style={collaborateStyle}>
      <div className="collaborate-child" />
      <div className="collab-descriptions" style={collabDescriptionsStyle}>
        <img
          className="collab-3-icon"
          loading="lazy"
          alt=""
          src={collab3}
          style={collab3IconStyle}
        />
      </div>
      <div
        className="achievement-celebration"
        style={achievementCelebrationStyle}
      >
        <h3 className="collaborative-group-classes">
          {collaborativeGroupClasses}
        </h3>
        <div className="learning-opportunity">
          <div
            className="learn-together-cosmo-container"
            style={learnTogetherCOSMOContainerStyle}
          >
            <span>
              <i>{learnTogether}</i>
              <span>{cOSMOAlsoOffersTheOpportu}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
