import Personalized from "./new-Personalized";
import PropTypes from "prop-types";
import StudentParentStep from "./new-ParentStudentStep";
import "./new-Personalized1.css";

const Personalized1 = ({ className = "" }) => {
  return (
    <section className={`personalized1 ${className}`}>
      <div className="personalized-steps">
        <StudentParentStep
          title="Book an Appointment"
          description="Begin by filling out our application form with your child’s
                    details and preferred subjects. Once completed, book an
                    appointment to discuss your needs further. "
          image="/ellipse-10@2x.png"
          propBackgroundColor="rgba(255, 0, 0, 0.2)"
          number="1"
        />
        <StudentParentStep
          title="Talk with Our Coordinator"
          description="Meet with our experienced advisor who will provide more information about our services 
          and guide you through the next steps.
          This is your opportunity to ask questions and ensure our services align with your expectations."
          image="/ellipse-10-1@2x.png"
          propBackgroundColor="rgba(0, 133, 255, 0.2)"
          number="2"
        />


        <StudentParentStep
          title="Get Assigned to the Best Coach"
          description="Based on your child’s needs and preferences, we will match you with the most suitable 
          coach from our pool of qualified experts. We ensure a perfect fit to maximize your child’s learning potential."
          image="/ellipse-11@2x.png"
          propBackgroundColor="rgba(255, 128, 0, 0.2)"
          number="3"
        />

        <StudentParentStep
          title="Start Learning" 
          image="/ellipse-12@2x.png"
          description="Once the tutor is assigned, schedule your first session and start the journey towards academic success.
           Our interactive platform makes learning engaging and effective."
          propBackgroundColor="rgba(143, 0, 255, 0.2)"
          number="4"
        />

      </div>
    </section>
  );
};

Personalized1.propTypes = {
  className: PropTypes.string,
};

export default Personalized1;
