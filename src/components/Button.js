import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="btn-container">
    <div className="link">
      <div className="button">
        <div className="apply-today">{text}</div>
      </div>
    </div>
  </button>
  );
};

export default Button;
