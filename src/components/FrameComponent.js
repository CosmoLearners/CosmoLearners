import "./FrameComponent.css";

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
            <span className="span">{` `}</span>
          </a>
        </h1>
        <div className="review-slider">
          <div className="divcss-usqjix" />
        </div>
        <div className="review-header-inner">
          <div className="reviews-content-parent">
            <div className="reviews-content">
              <div className="support-content">
                <div className="quote-mark-parent">
                  <div className="quote-mark">
                    <h1 className="h1">“</h1>
                  </div>
                  <div className="i-cant-express-how-amazing-my-parent">
                    <b className="i-cant-express">
                      I can't express how amazing my experience was at COSMO
                      while learning Python! Being just 13 years old, I was a
                      bit nervous about learning a programming language, but
                      COSMO made it an unforgettable journey. From the very
                      first day, I felt welcomed and excited about the course.
                      If you're a young aspiring coder like me, I highly
                      recommend COSMO. Thank you, COSMO, for making learning
                      Python such a blast! 🚀🐍
                    </b>
                    <b className="heading-42">Sarah W., Age 13</b>
                  </div>
                </div>
                <div className="support-content-inner">
                  <div className="frame-parent">
                    <div className="wrapper">
                      <h1 className="h11">“</h1>
                    </div>
                    <div className="cosmos-calculus-course-was-a-parent">
                      <b className="cosmos-calculus-course">
                        COSMO's Calculus course was a game-changer! Thanks to
                        one-on-one sessions, I aced my class with an A grade.
                        The instructors' expertise and passion made complex
                        Calculus concepts clear and enjoyable. The emphasis on
                        problem-solving and real-world applications was
                        invaluable. COSMO is a cosmic boost for anyone aiming to
                        excel in math!
                      </b>
                      <b className="heading-43">Jason M., High School Junior</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="review-image">
                <div className="rectangle-parent">
                  <div className="frame-item" />
                  <img
                    className="girl-review-1-icon"
                    loading="lazy"
                    alt=""
                    src="/girlreview-1@2x.png"
                  />
                </div>
              </div>
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="student-images">
                  <img
                    className="girl-review-1-icon1"
                    alt=""
                    src="/girlreview-1-1@2x.png"
                  />
                  <img
                    className="boy-review-1-icon"
                    alt=""
                    src="/boyreview-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
