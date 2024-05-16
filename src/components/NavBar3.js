import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar3.css";

const NavBar3 = () => {
  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const onLinkContainerClick = useCallback(() => {
    // Please sync "Signup" to the project
  }, []);

  return (
    <header className="navbar3" onClick={onNavBarClick}>
      <div className="cosmo-logo-edit3">
        <img
          className="cosmo-logo-invert-original-1-icon3"
          loading="lazy"
          alt=""
          src="/cosmologoinvertoriginal-1@2x.png"
        />
        <img
          className="logo-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-47@2x.png"
        />
      </div>
      <div className="navigation-links1">
        <div className="link-about3" onClick={onLinkABOUTClick}>
          ABOUT
        </div>
        <div className="link-courses3" onClick={onLinkCOURSESClick}>
          COURSES
        </div>
        <div
          className="link-parents3"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</div>
        <div className="link-become3" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </div>
        <div className="divdivider-vertical3" />
        <div className="navigation-divider">
          <div className="link11" onClick={onLinkContainerClick}>
            <div className="book-an-appointment6">BOOK AN APPOINTMENT</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar3;
