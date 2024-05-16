import CouchTestimony2 from "./CouchTestimony2";
import CouchTestimony1 from "./CouchTestimony1";
import CouchTestimony from "./CouchTestimony";
import "./CouchTestimonies1.css";

const CouchTestimonies1 = () => {
  return (
    <section className="couch-testimonies1">
      <CouchTestimony2 ellipse2="/ellipse-21@2x.png" />
      <CouchTestimony1 ellipse3="/ellipse-31@2x.png" />
      <CouchTestimony ellipse4="/ellipse-41@2x.png" />
    </section>
  );
};

export default CouchTestimonies1;
