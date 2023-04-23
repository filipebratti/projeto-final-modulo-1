import PropTypes from "prop-types";

function Input({ name, type, required, onChange }) {
  return (
    <div className="input mb-3">
      <label className="form-label">{name}</label>
      <input
        className="form-control"
        type={type}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Input;
