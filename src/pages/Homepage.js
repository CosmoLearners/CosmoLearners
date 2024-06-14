import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FeaturesComponent from "../components/FeaturesComponent";
import FrameComponent from "../components/FrameComponent";
import StoryJoinUsFooter from "../components/StoryJoinUsFooter";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-v3">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"></meta>

      <NavBar />
      <Hero />
      <FeaturesComponent />
      <FrameComponent />
      <StoryJoinUsFooter />
    </div>
  );
};

export default Homepage;
