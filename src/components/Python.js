import { useMemo } from "react";
import "./Python.css";

const Python = ({
  rectangle32,
  python,
  embarkOnACodingJourneyWit,
  pythonFlex,
  pythonPadding,
  pythonMinWidth,
  pythonWidth,
  pythonMargin,
  pythonPosition,
  pythonTop,
  pythonLeft,
  frameDivPadding,
  pythonMinWidth1,
  propHeight,
  embarkOnADisplay,
  embarkOnAMarginTop,
}) => {
  const pythonStyle = useMemo(() => {
    return {
      flex: pythonFlex,
      padding: pythonPadding,
      minWidth: pythonMinWidth,
      width: pythonWidth,
      margin: pythonMargin,
      position: pythonPosition,
      top: pythonTop,
      left: pythonLeft,
    };
  }, [
    pythonFlex,
    pythonPadding,
    pythonMinWidth,
    pythonWidth,
    pythonMargin,
    pythonPosition,
    pythonTop,
    pythonLeft,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const python1Style = useMemo(() => {
    return {
      minWidth: pythonMinWidth1,
    };
  }, [pythonMinWidth1]);

  const embarkOnAStyle = useMemo(() => {
    return {
      height: propHeight,
      display: embarkOnADisplay,
      marginTop: embarkOnAMarginTop,
    };
  }, [propHeight, embarkOnADisplay, embarkOnAMarginTop]);

  return (
    <div className="python2" style={pythonStyle}>
      <div className="python-child" />
      <img className="python-item" loading="lazy" alt="" src={rectangle32} />
      <div className="frame-parent1">
        <div className="python-wrapper" style={frameDivStyle}>
          <div className="python3" style={python1Style}>
            {python}
          </div>
        </div>
        <div className="embark-on-a" style={embarkOnAStyle}>
          {embarkOnACodingJourneyWit}
        </div>
      </div>
    </div>
  );
};

export default Python;
