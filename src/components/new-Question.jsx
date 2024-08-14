import { useMemo } from "react";
import { useState } from 'react';
import ButtonDropdown from "./new-ButtonDropdown";
import PropTypes from "prop-types";
import "./new-Question.css";

const Question = ({
  className = "",
  accordionDescription = "We offer tutoring in a wide range of programming languages and math subjects, catering to all levels from beginner to advanced. Whether your child is just starting out or looking to master advanced concepts, we have courses and tutors to support their learning journey. Our subjects include but are not limited to Python, Java, C++, Algebra, Geometry, and Calculus.",
  accordionFAQs,
  propMinWidth,
  vector9,
}) => {
  const [toggleDescription, setToggleDescription] = useState(false);

  const setToggle = () => {
    setToggleDescription(prevState => !prevState);    
  };

  const accordionFAQsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`question-1 ${className}`}>
      <div className="accordion-faqs-parent">
        <h2 className="accordion-faqs" style={accordionFAQsStyle}>
          {accordionFAQs}
        </h2>
        <ButtonDropdown onClick={setToggle} isOpen={toggleDescription} />
      </div>
      {/* <img className="question-1-child" alt="" src={vector9} /> */}
      <div className={`description ${toggleDescription ? 'show' : ''}`}>
        {accordionDescription}
      </div>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
  accordionDescription: PropTypes.string,
  accordionFAQs: PropTypes.string,
  propMinWidth: PropTypes.string,
  vector9: PropTypes.string,
};


export default Question; 