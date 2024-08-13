import PropTypes from "prop-types";
import "./new-ButtonDropdown.css";

const ButtonDropdown = ({ className = "" }) => {
  return (
    <div className={`button-dropdown ${className}`}>
      <div className="button-dropdown-child" />
      <img className="button-dropdown-item" alt="" src="/new-vector-8.svg" />
    </div>
  );
};

ButtonDropdown.propTypes = {
  className: PropTypes.string,
};

export default ButtonDropdown;
