import "./NavBar1.css";

const NavBar1 = ({
  onNavBarClick,
  onLinkABOUTClick,
  onLinkCOURSESClick,
  onLinkPARENTSClick,
  onLinkBECOMEClick,
  onLinkContainerClick,
}) => {
  return (
    <header className="navbar1" onClick={onNavBarClick}>
      <div className="cosmo-logo-edit1">
        <img
          className="cosmo-logo-invert-original-1-icon1"
          alt=""
          src="/cosmologoinvertoriginal-1@2x.png"
        />
        <img className="logo-graphic-icon" alt="" src="/rectangle-47@2x.png" />
      </div>
      <div className="main-links">
        <div className="link-about1" onClick={onLinkABOUTClick}>
          ABOUT
        </div>
        <div className="link-courses1" onClick={onLinkCOURSESClick}>
          COURSES
        </div>
        <div
          className="link-parents1"
          onClick={onLinkPARENTSClick}
        >{`STUDENTS & PARENTS`}</div>
        <div className="link-become1" onClick={onLinkBECOMEClick}>
          BECOME A TUTOR
        </div>
        <div className="divider-container">
          <div className="divdivider-vertical1" />
        </div>
        <div className="appointment-link-container">
          <div className="link9" onClick={onLinkContainerClick}>
            <div className="book-an-appointment3">BOOK AN APPOINTMENT</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar1;
