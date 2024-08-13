import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./new-NavBar1.css";

const NavBar1 = ({ className = "", logoImage }) => {
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

  const onLinkContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <header className={`navbar3 ${className}`}>
      <div className="cosmo-logo-edit-wrapper">
        <div className="cosmo-logo-edit1">
          <img
            className="cosmo-logo-invert-original-1-icon1"
            loading="lazy"
            alt=""
            src="/cosmologoinvertoriginal-1@2x.png"
          />
          <img
            className="logo-image-icon"
            loading="lazy"
            alt=""
            src={logoImage}
          />
        </div>
      </div>
      <div className="menu-options">
        <a className="link-about3" onClick={onLinkABOUTClick}>
          ABOUT
        </a>
        <a className="link-courses3" onClick={onLinkCOURSESClick}>
          COURSES
        </a>
        <a
          className="link-parents3"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</a>
        <a className="link-parents3" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </a>
        <div className="menu-divider">
          <div className="divdivider-vertical3" />
        </div>
        <div className="appointment-link-container">
          <div className="link12" onClick={onLinkContainerClick}>
            <a className="book-an-appointment7">BOOK AN APPOINTMENT</a>
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar1.propTypes = {
  className: PropTypes.string,
  logoImage: PropTypes.string,
};

export default NavBar1;
