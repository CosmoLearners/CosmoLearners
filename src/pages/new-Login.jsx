import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLinkLogohorizWhitetagpngClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const onLinkContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login">
      <header className="navbar1">
        <div className="logo-container1">
          <img
            className="link-logohoriz-whitetagpng1"
            loading="lazy"
            alt=""
            src="/link--logohorizwhitetagpng1@2x.png"
            onClick={onLinkLogohorizWhitetagpngClick}
          />
        </div>
        <div className="navigation-links">
          <a className="link-about1" onClick={onLinkABOUTClick}>
            ABOUT
          </a>
          <a className="link-courses1" onClick={onLinkCOURSESClick}>
            COURSES
          </a>
          <a className="link-parents1" onClick={onLinkPARENTSClick}>
            WHY COSMO?
          </a>
          <a className="link-become1" onClick={onLinkBECOMEClick}>
            BECOME A TUTOR
          </a>
          <div className="navigation-divider">
            <div className="divdivider-vertical1" />
          </div>
          <a className="link-login1">LOG IN</a>
          <div className="signup-button-container1">
            <div className="link2" onClick={onLinkContainerClick}>
              <a className="sign-up2">SIGN UP</a>
            </div>
          </div>
        </div>
      </header>
      <section className="email-field-wrapper">
        <div className="email-field">
          <img className="email-field-child" alt="" src="/rectangle-4.svg" />
          <div className="login-form">
            <div className="log-in1">Log in</div>
          </div>
          <b className="email2">Email</b>
          <div className="input-fields">
            <div className="email-input-container">
              <div className="horizontal-divider" />
            </div>
            <div className="password-input-container">
              <b className="password2">Password</b>
              <div className="password-divider" />
            </div>
            <div className="remember-and-submit">
              <div className="remember-me-container">
                <div className="checkbox" />
              </div>
              <div className="remember-me-label-container">
                <div className="remember-me">Remember Me</div>
                <div className="login-container-wrapper">
                  <div className="login-container">
                    <div className="divchakra-stack1">
                      <div className="link3">
                        <button className="button1">
                          <div className="login1">LOGIN</div>
                        </button>
                      </div>
                    </div>
                    <div className="forgot-password">Forgot password?</div>
                  </div>
                </div>
                <div className="create-account-container">
                  <div
                    className="need-an-account-container"
                    onClick={onLinkContainerClick}
                  >
                    <span>
                      <span>{`Need an account? `}</span>
                      <span className="create-an-account">
                        Create an account
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
