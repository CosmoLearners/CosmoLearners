import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  propWidth,
  propGap,
  propMinHeight,
  cosmo12,
  propGap1,
  propFlex,
  propMinWidth,
  propWidth1,
  propWidth2,
}) => {
  const footerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const footerTopStyle = useMemo(() => {
    return {
      gap: propGap,
      minHeight: propMinHeight,
    };
  }, [propGap, propMinHeight]);

  const footerLinksContainerStyle = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const divwNodeDafeecd6E254D620Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propFlex, propMinWidth, propWidth1]);

  const footer1Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <footer className={`footer3 ${className}`}>
      <div className="footer4" style={footerStyle}>
        <div className="footer-top" style={footerTopStyle}>
          <img className="cosmo-1-21" loading="lazy" alt="" src={cosmo12} />
          <div
            className="footer-links-container"
            style={footerLinksContainerStyle}
          >
            <div className="divw-node-dafeecd6-e254-d620-4">
              <b className="heading-42">About</b>
              <div className="list2">
                <div className="item-link6">Company</div>
                <div className="item-link7">Newsroom</div>
                <div className="item-link8">Privacy and Trust</div>
              </div>
            </div>
            <div
              className="divw-node-dafeecd6-e254-d620-5"
              style={divwNodeDafeecd6E254D620Style}
            >
              <div className="heading-4margin1">
                <b className="heading-43">Support</b>
              </div>
              <div className="listmargin1">
                <div className="list3">
                  <div className="item-link8">Become a Tutor</div>
                  <div className="item-link10">Contact Us</div>
                  <div className="item1">
                    <div className="link-help1">Help Center</div>
                  </div>
                  <div className="item-link8">Code of Conduct</div>
                </div>
              </div>
            </div>
          </div>
          <button className="book-an-appointment-wrapper">
            <b className="book-an-appointment5">BOOK AN APPOINTMENT</b>
          </button>
        </div>
      </div>
      <div className="footer5" style={footer1Style}>
        <div className="footer-legal">
          <div className="divw-node-dafeecd6-e254-d620-6">
            <div className="divfooter-cali-rights1">
              <div className="california-notice-link">
                <div className="link-california1">California Notice</div>
                <img
                  className="ceb5d14e108cfa7e8f1779-privacy-icon1"
                  loading="lazy"
                  alt=""
                  src="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp2@2x.png"
                />
                <div className="your-privacy-rights1">Your Privacy Rights</div>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-21">
            <div className="heading-4margin1">
              <div className="made-in-california-container1">
                <span>
                  <p className="made-in-california1">
                    Made in California Copyright
                  </p>
                  <p className="made-in-california1">
                    © 2023. All Rights Reserved
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-31">
            <div className="divfooter-legal-wrap1">
              <div className="divbreadcrumb-item-wrap2">
                <a className="link-privacy1">Privacy Policy</a>
                <div className="separator">|</div>
              </div>
              <div className="divbreadcrumb-item-wrap3">
                <div className="link-terms1">Terms of Service</div>
                <div className="separator">|</div>
              </div>
              <div className="link-accessibility1">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  cosmo12: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propMinHeight: PropTypes.any,
  propGap1: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default Footer;
