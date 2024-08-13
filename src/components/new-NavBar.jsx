import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./new-NavBar.css";

const NavBar = ({ className = "", onNavBarClick, logo }) => {
  const navigate = useNavigate();

  const onNavBarClick1 = useCallback(() => {
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
    <header className={`navbar2 ${className}`} onClick={onNavBarClick}>
      <div className="cosmo-logo-edit">
        <img
          className="cosmo-logo-invert-original-1-icon"
          loading="lazy"
          alt=""
          src="/cosmologoinvertoriginal-1@2x.png"
        />
        <img className="logo-icon" loading="lazy" alt="" src={logo} />
      </div>
      <div className="page-links">
        <a className="link-about2" onClick={onLinkABOUTClick}>
          ABOUT
        </a>
        <a className="link-courses2" onClick={onLinkCOURSESClick}>
          COURSES
        </a>
        <a
          className="link-parents2"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</a>
        <a className="link-parents2" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </a>
        <div className="divdivider-vertical-wrapper">
          <div className="divdivider-vertical2" />
        </div>
        <div className="link-wrapper">
          <div className="link8" onClick={onLinkContainerClick}>
            <a className="book-an-appointment1">BOOK AN APPOINTMENT</a>
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Action props */
  onNavBarClick: PropTypes.func,
};

export default NavBar;
