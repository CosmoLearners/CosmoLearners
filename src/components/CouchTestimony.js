import "./CouchTestimony.css";

const CouchTestimony = ({ ellipse4 }) => {
  return (
    <div className="couch-testimony-3">
      <div className="frame-div">
        <div className="frame-child1" />
        <div className="teaching-ai-is-container">
          <span>
            <p className="teaching-ai-is">
              "Teaching AI is about unlocking potential. I get to introduce
              students to the AI that's shaping our world and equip them with
              the knowledge to be part of that transformation."
            </p>
            <p className="jamal-s-phd">
              Jamal S., Ph.D. in AI and Machine Learning, Carnegie Mellon
              University
            </p>
          </span>
        </div>
      </div>
      <div className="wrapper-ellipse-4">
        <img
          className="wrapper-ellipse-4-child"
          loading="lazy"
          alt=""
          src={ellipse4}
        />
      </div>
    </div>
  );
};

export default CouchTestimony;
