import CoachTestimony2 from "./CoachTestimony2";
import CoachTestimony1 from "./CoachTestimony1";
import CoachTestimony from "./CoachTestimony";
import "./CoachTestimonies.css";

const CoachTestimonies = () => {
  return (
    <section className="couch-testimonies1">
      <CoachTestimony2 ellipse2="/ellipse-21@2x.png" />
      <CoachTestimony1 ellipse3="/ellipse-31@2x.png" />
      <CoachTestimony ellipse4="/ellipse-41@2x.png" />
    </section>
  );
};

export default CoachTestimonies;
