import PropTypes from "prop-types";
import "./new-ButtonDropdown.css";

const ButtonDropdown = ({ className = "", onClick, isOpen }) => {
  return (
    <div className={`button-dropdown ${className}`} onClick={onClick} >
      <div className="button-dropdown-child" />
      <img 
      className={`button-dropdown-item ${isOpen ? 'rotated' : ''}` }
      alt="dropdown icon"  
      src="/new-vector-8.svg"
      />
    </div>
  );
};

ButtonDropdown.propTypes = {
  className: PropTypes.string,
};

export default ButtonDropdown;
