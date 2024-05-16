import "./Hero.css";


const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7"; 

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="the-first-step-into-your-cosmi-parent">
        <h1 className="the-first-step-container">
          <p className="the-first-step">
            THE FIRST STEP INTO YOUR COSMIC TECH JOURNEY
          </p>
          <p className="starts-here">STARTS HERE</p>
        </h1>
        <div className="discover-personalized-programm">
          Discover personalized programming and math lessons taught by industry
          professionals.
        </div>
        <button className="divchakra-stack7">
          <div className="link8">
            <div className="button7" onClick={onGoogleFormClick}>
              <div className="start-learning">Start Learning</div>
            </div>
          </div>
        </button>
      </div>
      <div className="scholar-kid-2-parent">
        <img className="scholar-kid-2-icon" alt="" src="/scholarkid-2@2x.png" />
        <div className="astro-dude-platform-1">
          <div className="top-down-grad" />
          <div className="left-right-grad" />
          <div className="top-left-linear-grad" />
          <div className="top-right-linear-grad" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
