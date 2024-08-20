import PropTypes from "prop-types";
import "./new-Footer3.css";

const Footer3 = ({ className = "", cosmo12, ceb5d14e108cfa7e8f1779Pri }) => {
  return (
    <footer className={`footer8 ${className}`}>
      <div className="footer9">
        <div className="footer-content1">
          <img className="cosmo-1-22" loading="lazy" alt="" src={cosmo12} />
          <div className="footer-links2">
            <div className="divw-node-dafeecd6-e254-d620-12">
              <b className="heading-46">About</b>
              <div className="list6">
                <div className="item-link18">Company</div>
                <div className="item-link19">Newsroom</div>
                <div className="item-link20">Privacy and Trust</div>
              </div>
            </div>
            <div className="divw-node-dafeecd6-e254-d620-13">
              <div className="heading-4margin3">
                <b className="heading-47">Support</b>
              </div>
              <div className="listmargin3">
                <div className="list7">
                  <div className="item-link20">Become a Tutor</div>
                  <div className="item-link22">Contact Us</div>
                  <div className="item3">
                    <div className="link-help3">Help Center</div>
                  </div>
                  <div className="item-link20">Code of Conduct</div>
                </div>
              </div>
            </div>
          </div>
          <button className="footer-appointment2">
            <b className="book-an-appointment8">BOOK AN APPOINTMENT</b>
          </button>
        </div>
      </div>
      <div className="footer10">
        <div className="legal-content1">
          <div className="divw-node-dafeecd6-e254-d620-14">
            <div className="divfooter-cali-rights3">
              <div className="notice-links">
                <div className="link-california3">California Notice</div>
                <img
                  className="ceb5d14e108cfa7e8f1779-privacy-icon3"
                  loading="lazy"
                  alt=""
                  src={ceb5d14e108cfa7e8f1779Pri}
                />
                <div className="your-privacy-rights3">Your Privacy Rights</div>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-23">
            <div className="heading-4margin3">
              <div className="made-in-california-container3">
                <span>
                  <p className="made-in-california3">
                    Made in California Copyright
                  </p>
                  <p className="made-in-california3">
                    © 2023. All Rights Reserved
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="divfooter-grid-box-33">
            <div className="divfooter-legal-wrap3">
              <div className="divbreadcrumb-item-wrap6">
                <a className="link-privacy3">Privacy Policy</a>
                <div className="policy-separator">|</div>
              </div>
              <div className="divbreadcrumb-item-wrap7">
                <div className="link-terms3">Terms of Service</div>
                <div className="policy-separator">|</div>
              </div>
              <div className="link-accessibility3">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
  cosmo12: PropTypes.string,
  ceb5d14e108cfa7e8f1779Pri: PropTypes.string,
};

export default Footer3;
