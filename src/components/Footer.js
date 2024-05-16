import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  cosmo12,
  ceb5d14e108cfa7e8f1779Pri,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propWidth1,
  propPadding,
  propWidth2,
  propPadding1,
}) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  const footer1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const footerTopStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const footer2Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const legalContentStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <footer className="footer5" style={footerStyle}>
      <div className="footer6" style={footer1Style}>
        <div className="footer-top" style={footerTopStyle}>
          <img className="cosmo-1-21" loading="lazy" alt="" src={cosmo12} />
          <div className="footer-links">
            <div className="divw-node-dafeecd6-e254-d620-8">
              <b className="heading-46">About</b>
              <div className="list4">
                <div className="item-link12">Company</div>
                <div className="item-link13">Newsroom</div>
                <div className="item-link14">Privacy and Trust</div>
              </div>
            </div>
            <div className="divw-node-dafeecd6-e254-d620-9">
              <div className="heading-4margin2">
                <b className="heading-47">Support</b>
              </div>
              <div className="listmargin2">
                <div className="list5">
                  <div className="item-link15">Become a Tutor</div>
                  <div className="item-link16">Contact Us</div>
                  <div className="item2">
                    <div className="link-help2">Help Center</div>
                  </div>
                  <div className="item-link17">Code of Conduct</div>
                </div>
              </div>
            </div>
          </div>
          <button className="footer-appointment">
            <b className="book-an-appointment4">BOOK AN APPOINTMENT</b>
          </button>
        </div>
      </div>
      <div className="footer7" style={footer2Style}>
        <div className="legal-content1" style={legalContentStyle}>
          <div className="divw-node-dafeecd6-e254-d620-10">
            <div className="divfooter-cali-rights2">
              <div className="notice-link">
                <div className="link-california2">California Notice</div>
                <img
                  className="ceb5d14e108cfa7e8f1779-privacy-icon2"
                  alt=""
                  src={ceb5d14e108cfa7e8f1779Pri}
                />
                <div className="your-privacy-rights2">Your Privacy Rights</div>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-22">
            <div className="divw-node-dafeecd6-e254-d620-11">
              <div className="made-in-california-container2">
                <p className="made-in-california2">
                  Made in California Copyright
                </p>
                <p className="all-rights-reserved2">
                  © 2023. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-32">
            <div className="divfooter-legal-wrap2">
              <div className="divbreadcrumb-item-wrap4">
                <div className="link-privacy2">Privacy Policy</div>
                <div className="divider">|</div>
              </div>
              <div className="divbreadcrumb-item-wrap5">
                <div className="link-terms2">Terms of Service</div>
                <div className="div3">|</div>
              </div>
              <div className="link-accessibility2">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
