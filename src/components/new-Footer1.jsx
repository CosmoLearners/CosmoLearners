import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer6 ${className}`}>
      <div className="footer-content">
        <img
          className="cosmo-logo-no-bg-1-icon"
          loading="lazy"
          alt=""
          src="/cosmologonobg-1@2x.png"
        />
        <div className="footer-links1">
          <div className="divw-node-dafeecd6-e254-d620-8">
            <b className="heading-44">About</b>
            <div className="list4">
              <div className="item-link12">Company</div>
              <div className="item-link13">Newsroom</div>
              <div className="item-link14">Privacy and Trust</div>
            </div>
          </div>
          <div className="divw-node-dafeecd6-e254-d620-9">
            <div className="heading-4margin2">
              <b className="heading-45">Support</b>
            </div>
            <div className="listmargin2">
              <div className="list5">
                <div className="item-link14">Become a Tutor</div>
                <div className="item-link16">Contact Us</div>
                <div className="item2">
                  <div className="link-help2">Help Center</div>
                </div>
                <div className="item-link14">Code of Conduct</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-appointment1">
          <h2 className="book-an-appointment6">BOOK AN APPOINTMENT</h2>
        </div>
      </div>
      <div className="footer7">
        <div className="legal-content">
          <div className="divw-node-dafeecd6-e254-d620-10">
            <div className="divfooter-cali-rights2">
              <div className="notice-and-rights-links">
                <div className="link-california2">California Notice</div>
                <img
                  className="ceb5d14e108cfa7e8f1779-privacy-icon2"
                  loading="lazy"
                  alt=""
                  src="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp3@2x.png"
                />
                <div className="your-privacy-rights2">Your Privacy Rights</div>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-22">
            <div className="heading-4margin2">
              <div className="made-in-california-container2">
                <span>
                  <p className="made-in-california2">
                    Made in California Copyright
                  </p>
                  <p className="made-in-california2">
                    © 2023. All Rights Reserved
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-32">
            <div className="divfooter-legal-wrap2">
              <div className="divbreadcrumb-item-wrap4">
                <a className="link-privacy2">Privacy Policy</a>
                <div className="separator1">|</div>
              </div>
              <div className="divbreadcrumb-item-wrap5">
                <div className="link-terms2">Terms of Services</div>
                <div className="separator1">|</div>
              </div>
              <div className="link-accessibility2">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
