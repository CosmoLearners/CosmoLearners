import "./StoryJoinUsFooter.css";
import { Link } from "react-router-dom";


const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7";

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};

const StoryJoinUsFooter = () => {
  return (
    <section className="story-join-us-footer">
      <div className="wrapper-vector-4">
        <img
          className="wrapper-vector-4-child"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <div className="mission-content-wrapper">
        <div className="mission-content">
          <h2 className="heading-2">Our STORY</h2>
          <h3 className="at-cosmo-we3">
            At COSMO, we are on a mission to empower students and educators
            alike to explore the vast universe of knowledge. Our journey begins
            with a shared passion for learning and a commitment to bridging the
            gap between eager students and dedicated teachers. We believe that
            education is the cosmic key that unlocks the potential of every
            individual.
          </h3>
        </div>
      </div>
      <div className="cosmo-scholar-students-want-t-wrapper">
        <h2 className="cosmo-scholar-students-container">
          <b>COSMO SCHOLAR:</b>
          <span>
            {" "}
            Students Want to Learn, Teachers Want to Teach, We Connect Them.
          </span>
        </h2>
      </div>
      <div className="course-offered">
        <h3 className="heading-21">Become experts in Coding and Math!</h3>
        <div className="python-parent">
          <button className="python">
            <div className="divchakra-stack8">
              <div className="spanchakra-avatar">
                <div className="course-satsvg">
                  <img
                    className="course-satsvg-icon"
                    alt=""
                    src="/coursesatsvg@2x.png"
                  />
                </div>
              </div>
              <div className="python1">Python</div>
            </div>
          </button>
          <button className="scratch">
            <div className="divchakra-stack9">
              <div className="spanchakra-avatar1">
                <div className="course-satsvg1">
                  <img
                    className="course-satsvg-icon1"
                    alt=""
                    src="/coursesatsvg-1@2x.png"
                  />
                </div>
              </div>
              <div className="scratch1">Scratch</div>
            </div>
          </button>
          <button className="java">
            <div className="divchakra-stack10">
              <div className="spanchakra-avatar2">
                <div className="course-satsvg2">
                  <img
                    className="course-satsvg-icon2"
                    alt=""
                    src="/coursesatsvg-2@2x.png"
                  />
                </div>
              </div>
              <div className="java1">Java</div>
            </div>
          </button>
          <button className="swift">
            <div className="divchakra-stack11">
              <div className="spanchakra-avatar3">
                <div className="course-satsvg3">
                  <img
                    className="course-satsvg-icon3"
                    alt=""
                    src="/coursesatsvg-3@2x.png"
                  />
                </div>
              </div>
              <div className="swift1">Swift</div>
            </div>
          </button>
          <button className="algebra">
            <div className="divchakra-stack12">
              <div className="spanchakra-avatar4">
                <div className="course-satsvg4">
                  <img
                    className="course-satsvg-icon4"
                    alt=""
                    src="/coursesatsvg-4@2x.png"
                  />
                </div>
              </div>
              <div className="algebra-wrapper">
                <div className="algebra1">Algebra</div>
              </div>
            </div>
          </button>
          <button className="statistics">
            <div className="divchakra-stack13">
              <div className="spanchakra-avatar5">
                <div className="course-satsvg5">
                  <img
                    className="course-satsvg-icon5"
                    alt=""
                    src="/coursesatsvg-5@2x.png"
                  />
                </div>
              </div>
              <div className="statistics1">Statistics</div>
            </div>
          </button>
          <button className="calculus">
            <div className="divchakra-stack14">
              <div className="spanchakra-avatar6">
                <div className="course-satsvg6">
                  <img
                    className="course-satsvg-icon6"
                    alt=""
                    src="/coursesatsvg-6@2x.png"
                  />
                </div>
              </div>
              <div className="calculus1">Calculus</div>
            </div>
          </button>
          <div className="link-button">
            <h3 className="more">More!</h3>
            <div className="img">
              <img
                className="shape-creator-icon"
                alt=""
                src="/shape-creator.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        {/* <div className="frame-wrapper"> */}
        <div className="frame-container">

          <div className="heading-2-join-our-movement-parent">
            <h3 className="heading-22">
              Join COSMO today and embark on a cosmic learning adventure like
              no other. Together, we'll reach for the stars and unlock your
              full potential!
            </h3>
            <div id="planet-stack-rocket">

              <div className="wrapper-frame-31-wrapper">
                <div className="wrapper-frame-31">
                  <img
                    className="wrapper-frame-31-child"
                    loading="lazy"
                    alt=""
                    src="/frame-31@2x.png"
                  />
                </div>
              </div>
              <div className="divchakra-stack15">
                <button className="link-button1">
                  <div className="start-learning-now" onClick={onGoogleFormClick}>Start Learning Now</div>
                </button>
                <div className="linkmargin">
                  <button className="link-button2">
                    <div className="become-a-tutor1">Become a Tutor</div>
                  </button>
                </div>
                <div className="linkmargin1">
                  <button className="link-button3" onClick={onGoogleFormClick}>
                    <div className="for-parents">For Parents</div>
                  </button>
                </div>
              </div>

              <div className="cloudlargerightsvg-parent">
                <div className="cloudlargerightsvg">
                  <img className="circle-container-icon" alt="" src="/vector-1.svg" />
                </div>
                <img
                  className="rocket-clipart-1-icon"
                  loading="lazy"
                  alt=""
                  src="/rocketclipart-1@2x.png"
                />
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
      <footer className="footer3">
        <div className="cosmo-logo-no-bg-1-parent">
          <img
            className="cosmo-logo-no-bg-1-icon"
            loading="lazy"
            alt=""
            src="/cosmologonobg-1@2x.png"
          />
          <div className="divw-node-dafeecd6-e254-d620-parent">
            <div className="divw-node-dafeecd6-e254-d620-4">
              <b className="heading-44">About</b>
              <div className="list2">
                <div className="item-link6">< Link to="./aboutus">Company</Link></div>
                <div className="item-link7">< Link to="./aboutus">Newsroom</Link></div>
                <div className="item-link8">< Link to="./privacy-policy">Privacy and Trust</Link></div>
              </div>
            </div>
            <div className="divw-node-dafeecd6-e254-d620-5">
              <div className="heading-4margin1">
                <b className="heading-45">Support</b>
              </div>
              <div className="listmargin1">
                <div className="list3">
                  <div className="item-link9">< Link to="https://www.indeed.com/cmp/Cosmo-Scholar">Become a Tutor</Link></div>
                  <div className="item-link10">Contact Us</div>
                  <div className="item1">
                    <div className="link-help1">Help Center</div>
                  </div>
                  <div className="item-link11">Code of Conduct</div>
                </div>
              </div>
            </div>
          </div>
          <button className="book-an-appointment-wrapper" onClick={onGoogleFormClick}>
            <b className="book-an-appointment2">BOOK AN APPOINTMENT</b>
          </button>
        </div>

        <div className="footer4-new">
          <div class="footer-container">
            <div class="california-notice-privacy-group">
              <div className="link-california1">California Notice</div>
              <img
                className="ceb5d14e108cfa7e8f1779-privacy-icon1"
                loading="lazy"
                alt=""
                src="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp@2x.png"
              />
              <div className="your-privacy-rights1">
                Your Privacy Rights
              </div>
            </div>
            <div className="copyright-column-group">
              <p className="made-in-california">
                Made in California Copyright
              </p>
              <p className="all-rights-reserved">
                © 2023. All Rights Reserved
              </p>
            </div>
            <div class="privacy-list">
              <div className="link-privacy-group">
                <div className="link-privacy1 privacy-list-item">Privacy Policy</div>
                <div className="div1 privacy-list-item">|</div>
                <div className="link-terms1 privacy-list-item">Terms of Service</div>
                <div className="div2 privacy-list-item">|</div>
                <div className="link-accessibility1 privacy-list-item">Accessibility</div>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </section >
  );
};

export default StoryJoinUsFooter;
