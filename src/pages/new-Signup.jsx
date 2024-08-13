import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const onLinkABOUTClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onLinkCOURSESClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onLinkPARENTSClick = useCallback(() => {
    navigate("/students-parents");
  }, [navigate]);

  const onLinkBECOMEClick = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  const onLinkLOGINClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="signup">
      <header className="navbar">
        <div className="logo-container">
          <img
            className="link-logohoriz-whitetagpng"
            loading="lazy"
            alt=""
            src="/link--logohorizwhitetagpng@2x.png"
          />
        </div>
        <div className="navigation">
          <a className="link-about" onClick={onLinkABOUTClick}>
            ABOUT
          </a>
          <a className="link-courses" onClick={onLinkCOURSESClick}>
            COURSES
          </a>
          <a className="link-parents" onClick={onLinkPARENTSClick}>
            WHY COSMO?
          </a>
          <a className="link-become" onClick={onLinkBECOMEClick}>
            BECOME A TUTOR
          </a>
          <div className="nav-divider">
            <div className="divdivider-vertical" />
          </div>
          <a className="link-login" onClick={onLinkLOGINClick}>
            LOG IN
          </a>
          <div className="signup-link-container">
            <div className="link" onClick={onLinkContainerClick}>
              <a className="sign-up">SIGN UP</a>
            </div>
          </div>
        </div>
      </header>
      <section className="content1">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="signup-header">
            <h1 className="sign-up-for">Sign up for FREE</h1>
            <div className="first-name-parent">
              <div className="first-name">
                <b className="first-name1">First Name</b>
                <div className="field-inputs" />
              </div>
              <div className="first-name">
                <b className="first-name1">Last Name</b>
                <div className="field-inputs" />
              </div>
              <div className="first-name">
                <b className="first-name1">Email</b>
                <div className="field-inputs" />
              </div>
              <div className="first-name">
                <b className="first-name1">Password</b>
                <div className="field-inputs" />
              </div>
            </div>
          </div>
          <div className="signup-button-container-wrapper">
            <div className="signup-button-container">
              <div className="button-wrapper">
                <div className="divchakra-stack">
                  <div className="link1">
                    <button className="button">
                      <div className="sign-up1">Sign up</div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="already-have-an-container"
                onClick={onLinkLOGINClick}
              >
                <span>
                  <span>{`Already have an account? `}</span>
                  <span className="log-in">Log in</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
