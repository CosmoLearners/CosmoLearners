import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageV from "./pages/HomepageV";
import BecomeATutor from "./pages/BecomeATutor";
import WhyCosmo from "./pages/WhyCosmo";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/become-a-tutor":
        title = "";
        metaDescription = "";
        break;
      case "/parents&students":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/courses":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageV />} />
      <Route path="/become-a-tutor" element={<BecomeATutor />} />
      <Route path="/parents&students" element={<WhyCosmo />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}
export default App;
