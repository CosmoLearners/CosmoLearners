import { useCallback } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer-main";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.js";
import "./google-form.css";
const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7";

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};


const Form  = () => {
  const navigate = useNavigate();

  const onItemLink1Click = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  return (
    <div className="form-container">
      {<NavBar />}
      <iframe id="zoho-form" aria-label='Free Trial Session ' height="100%" width="100%" frameborder="0" src='https://forms.zohopublic.com/cosmolearnersgm1/form/Requestafreetrial/formperma/n-27rTMnpQlJm5TR2k-7upOONCSxRMgOOmI8T9rYObM' scrolling="no"></iframe>
      <Footer />
    </div>
  );
};

export default Form ;
