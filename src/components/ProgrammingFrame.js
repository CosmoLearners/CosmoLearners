import "./MathFrame.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


const MathFrame = () => {

const location = useLocation(); 

 useEffect(() => {
    // Add a slight delay to ensure the page is fully loaded before attempting to scroll
    if (location && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0); // The delay can be adjusted if needed
    }
  }, [location]); 
  
  return (
    <section className="programming-languages-parent" id="programminglanguagesanchor">
      <b className="programming-languages">Programming Languages</b>
      <section className="programming-languages1">

        <div class="course-item">
          <div class="course-img-wrapper"> 
            <img class="course-img" src="/rectangle-32@2x.png"/>
          </div>
          <div class="course-text-wrapper">
            <div class="heading-text"> Python</div>
            <div class="description-text">Embark on a coding journey with one of the most versatile programming languages.</div>
          </div>
        </div>

        <div class="course-item">
          <div class="course-img-wrapper"> 
            <img class="course-img" src="/rectangle-32-1@2x.png"/>
          </div>
          <div class="course-text-wrapper">
            <div class="heading-text"> Java</div>
            <div class="description-text">Dive into object-oriented programming with this robust language.</div>
          </div>
        </div>

        <div class="course-item">
          <div class="course-img-wrapper"> 
            <img class="course-img" src="/rectangle-32-2@2x.png"/>
          </div>
          <div class="course-text-wrapper">
            <div class="heading-text"> C++ </div>
            <div class="description-text">Master the fundamentals of this powerful, high-performance language.</div>
          </div>
        </div>

        <div class="course-item">
          <div class="course-img-wrapper"> 
            <img class="course-img" src="/rectangle-32-3@2x.png"/>
          </div>
          <div class="course-text-wrapper">
            <div class="heading-text"> Scratch </div>
            <div class="description-text">Begin programming with a visual language perfect for beginners.</div>
          </div>
        </div>

        <div class="course-item">
          <div class="course-img-wrapper"> 
            <img class="course-img" src="/htmlcssjs.jpg"/>
          </div>
          <div class="course-text-wrapper">
            <div class="heading-text"> Web Development </div>
            <div class="description-text">Learn to create basic and complex websites with HTML, CSS, Javascript and a variety of Frameworks such as Flask.</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MathFrame;
