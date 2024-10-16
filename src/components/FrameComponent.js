import "./FrameComponent.css";
import frameList from "./FrameList";

const FrameComponent = () => {
  return (
    <section className="review-header-wrapper">
      <div className="review-header">
        <h1 className="heading-2-container">
          Hear from the Community! 🔈
          <a
            className="a"
            href="https://emojipedia.org/speaker-low-volume"
            target="_blank"
          >
            <span className="span">{``}</span>
          </a>
        </h1>
        <div className="review-slider">
          <div className="divcss-usqjix" />
        </div>

        <div className="review-container">
          {frameList.map((frame) => (
            <div key={frame.id} className="review-list">
              <div className="review-text">
                <p>
                  <span className="quote-mark">“</span>
                  <p></p>
                  {frame.express} 
                </p>
              </div>
              <div className="review-img">
                {frame.profile}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
