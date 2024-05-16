import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkPARENTSClick = useCallback(() => {
    navigate("/why-cosmo");
  }, [navigate]);

  const onLinkBECOMEClick = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    // Please sync "Signup" to the project
  }, []);

  const onLinkABOUTClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onLinkCOURSESClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  return (
    <header className="navbar2" onClick={onNavBarClick}>
      <div className="cosmo-logo-edit2">
        <img
          className="cosmo-logo-invert-original-1-icon2"
          alt=""
          src="/cosmologoinvertoriginal-1@2x.png"
        />
        <img className="logo-icon" alt="" src="/rectangle-47@2x.png" />
      </div>
      <div className="nav-links">
        <div
          className="link-parents2"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</div>
        <div className="link-become2" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </div>
        <div className="divdivider-vertical2" />
        <div className="appointment-link">
          <div className="link10" onClick={onLinkContainerClick}>
            <div className="book-an-appointment5">BOOK AN APPOINTMENT</div>
          </div>
        </div>
        <div className="link-about2" onClick={onLinkABOUTClick}>
          ABOUT
        </div>
        <div className="link-courses2" onClick={onLinkCOURSESClick}>
          COURSES
        </div>
      </div>
    </header>
  );
};

export default NavBar2;
