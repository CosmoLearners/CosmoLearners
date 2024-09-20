import { useCallback } from "react";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer-main.js";
import { useNavigate } from "react-router-dom";
import "./google-form.css";

const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7";

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};


const Form = () => {
  const navigate = useNavigate();

  const onItemLink1Click = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  return (
    <div className="form-container">
      {<NavBar />}

      <div id="google-form">
        {/* <iframe height="100%" width="100%" src="https://docs.google.com/forms/d/e/1FAIpQLSe2LgDbvYhP5K4zD707gB3V2MN0PHS6ZcmYG-b2vQ5iH6AE5g/viewform?embedded=true" scrolling="yes"
          frameBorder="0" >Loading…</iframe> */}

        <iframe aria-label='Free Trial Session ' height="100%" width="100%" frameborder="0" src='https://forms.zohopublic.com/cosmolearnersgm1/form/Requestafreetrial/formperma/n-27rTMnpQlJm5TR2k-7upOONCSxRMgOOmI8T9rYObM' scrolling="yes"></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Form;
