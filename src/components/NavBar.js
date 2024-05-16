import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7"; 

  const onLinkABOUTClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onLinkCOURSESClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onLinkPARENTSClick = useCallback(() => {
    navigate("/why-cosmo");
  }, [navigate]);

  const onLinkBECOMEClick = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  const onGoogleFormClick = () => {
    window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
  };

  const onLinkHOMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <header className="navbar">
      <div className="cosmo-logo-edit">
        <img
          className="cosmo-logo-invert-original-1-icon"
          loading="lazy"
          alt=""
          src="/cosmologoinvertoriginal-1@2x.png"
        />
         <img
          className="cosmo-logo-edit-child"
          loading="lazy"
          alt=""
          src="/rectangle-47@2x.png" 
          onClick={onLinkHOMEClick}
        />
      </div>
      <div className="navigation-links">
        <div className="link-about link-hover" onClick={onLinkABOUTClick}>
          ABOUT
        </div>
        <div className="link-courses link-hover" onClick={onLinkCOURSESClick}>
          COURSES
        </div>
        <div
          className="link-parents link-hover"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</div>
        <div className="link-become link-hover" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </div>
        <div className="link-divider">
          <div className="divdivider-vertical" />
        </div>
        <div className="appointment-button-container">
          <button className="link7" onClick={onGoogleFormClick}>
            <div className="book-an-appointment1">BOOK AN APPOINTMENT</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
