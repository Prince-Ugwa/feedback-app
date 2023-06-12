import PropTypes from "prop-types";
const Button = ({ children, version, type, isDisabled }) => {
  console.log(type, version, isDisabled);
  return (
    <button type={type} isDisable={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
};
export default Button;
