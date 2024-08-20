import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./Footer-main.css"; 

export default function Footer() {
    const navigate = useNavigate();

    const aboutusLink = useCallback(() => {
        navigate("/aboutus");
    }, [navigate]);

    const onItemLink1Click = useCallback(() => {
        navigate("/become-a-tutor");
    }, [navigate]);

    const onClickPrivacyLink = useCallback(() => {
        navigate("/privacy-policy");
    }, [navigate]);



    const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7"; 

    const onGoogleFormClick = () => {
        window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
      };

    return (
        <footer className="footer">
            <div className="footer1">
                <div className="footer-logo">
                    <img
                        className="cosmo-1-2"
                        loading="lazy"
                        alt=""
                        src="cosmo-1-21@2x-2.png"
                    />
                    <div className="footer-navigation">
                        <div className="divw-node-dafeecd6-e254-d620-">
                            <b className="heading-4" onClick={aboutusLink}>About</b>
                            <div className="list">
                                <div className="item-link" onClick={aboutusLink}>Company</div>
                                <div className="item-link1">Newsroom</div>
                                <div className="item-link2" onClick={onClickPrivacyLink}> Privacy and Trust</div>
                            </div>
                        </div>
                        <div className="divw-node-dafeecd6-e254-d620-1">
                            <div className="heading-4margin">
                                <b className="heading-41">Support</b>
                            </div>
                            <div className="listmargin">
                                <div className="list1">
                                    <div className="item-link3" onClick={onItemLink1Click}>
                                        Become a Tutor
                                    </div>
                                    <div className="item-link4">Contact Us</div>
                                    <div className="footer-item">
                                        <div className="link-help">Help Center</div>
                                    </div>
                                    <div className="item-link5">Code of Conduct</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="appointment-button" onClick={onGoogleFormClick}>
                        <h2 className="book-an-appointment">BOOK FREE APPOINTMENT</h2>
                    </button>
                </div>
            </div>
            <div className="footer2">
                <div className="legal-content">
                    <div className="divw-node-dafeecd6-e254-d620-2">
                        <div className="divfooter-cali-rights">
                            <div className="link-california-notice-parent">
                                <div className="link-california">California Notice</div>
                                <img
                                    className="ceb5d14e108cfa7e8f1779-privacy-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp1@2x.png"
                                />
                                <div className="your-privacy-rights">Your Privacy Rights</div>
                            </div>
                        </div>
                    </div>
                    <div className="divfooter-grid-box-2">
                        <div className="divw-node-dafeecd6-e254-d620-3">
                            <div className="made-in-california-container">
                                <p className="made-in-california">
                                    Made in California Copyright
                                </p>
                                <p className="all-rights-reserved">
                                    © 2023. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divfooter-grid-box-3">
                        <div className="divfooter-legal-wrap">
                            <div className="divbreadcrumb-item-wrap">
                                <div className="link-privacy">Privacy Policy</div>
                                <div className="separator">|</div>
                            </div>
                            <div className="divbreadcrumb-item-wrap1">
                                <div className="link-terms">Terms of Service</div>
                                <div className="separator">|</div>
                            </div>
                            <div className="link-accessibility">Accessibility</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}

