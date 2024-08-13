import Question from "./new-Question";
import PropTypes from "prop-types";
import "./new-FAQs.css";

const FAQs = ({ className = "" }) => {
  return (
    <section className={`f-a-qs ${className}`}>
      <h1 className="learn-more-about6">
        Frequently Asked Questions (FAQs) 🤔
      </h1>
      <Question
        accordionDescription="To schedule an appointment with us, simply fill out and submit the form provided when you click “Book An Appointment.” An advisor will contact you as soon as possible to schedule an appointment to discuss the best options for your child’s needs. "
        accordionFAQs="How do I schedule an appointment with an advisor?"
        propMinWidth="524px"
        vector9="/new-vector-8.svg"
      />
      <Question
        accordionDescription="If your child isn’t satisfied with their coach, we offer the option to have a meeting with one of our advisors. During this meeting, the advisor will listen to your concerns and help you find a tutor who better fits your child’s learning style and needs. Our goal is to ensure a positive and productive learning experience for every student."
        accordionFAQs="What if my child doesn’t like their coach?"
        propMinWidth="470px"
        vector9="/new-vector-8.svg"
      />
      <Question
        accordionDescription="All of our tutoring sessions are conducted online. This allows for greater flexibility and convenience, as students can attend sessions from the comfort of their own home. Our online platform provides interactive tools and resources to enhance the learning experience, making it as effective as in-person tutoring."
        accordionFAQs="Are the tutoring sessions online or in-person?"
        propMinWidth="522px"
        vector9="/new-vector-9.svg"
      />
      <Question
        accordionDescription="We offer tutoring in a wide range of programming languages and math subjects, catering to all levels from beginner to advanced. Whether your child is just starting out or looking to master advanced concepts, we have courses and tutors to support their learning journey. Our subjects include but are not limited to Python, Java, C++, Algebra, Geometry, and Calculus."
        accordionFAQs="What subjects and levels do you cover?"
        vector9="/new-vector-9.svg"
      />
    </section>
  );
};

FAQs.propTypes = {
  className: PropTypes.string,
};

export default FAQs;
