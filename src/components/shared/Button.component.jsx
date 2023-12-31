import PropTypes from "prop-types";
const Button = ({ children, version, type, isDisable }) => {
  // console.log(type, version, isDisable);
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisable: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool,
};
export default Button;
