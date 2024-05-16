import CouchTestimony2 from "./CouchTestimony2";
import CouchTestimony1 from "./CouchTestimony1";
import CouchTestimony from "./CouchTestimony";
import "./CouchTestimonies.css";

const CouchTestimonies = () => {
  return (
    <div className="couch-testimonies">
      <CouchTestimony2 ellipse2="/ellipse-2@2x.png" />
      <CouchTestimony1 ellipse3="/ellipse-3@2x.png" />
      <CouchTestimony ellipse4="/ellipse-4@2x.png" />
    </div>
  );
};

export default CouchTestimonies;
