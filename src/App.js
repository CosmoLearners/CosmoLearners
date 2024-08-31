import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import BecomeATutor from "./pages/BecomeATutor";
import WhyCosmo from "./pages/WhyCosmo";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Form from "./pages/google-form"
import StudentsParents from "./pages/new-StudentsParents"
import PrivacyPolicy from "./pages/new-PrivacyPolicy"
import Randompage from "./pages/Randompage";

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
      case "/students&parents":
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
      case "/Appointment":
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
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/" element={< Randompage/>} /> */}
      <Route path="/become-a-tutor" element={<BecomeATutor />} />
      <Route path="/students&parents" element={<StudentsParents />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/appointment" element={<Form/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
export default App;
