import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import StoryJoinUsFooter from "../components/StoryJoinUsFooter";
import "./HomepageV.css";

const HomepageV = () => {
  return (
    <div className="homepage-v3">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"></meta>

      <NavBar />
      <Hero />
      <FrameComponent1 />
      <FrameComponent />
      <StoryJoinUsFooter />
    </div>
  );
};

export default HomepageV;
