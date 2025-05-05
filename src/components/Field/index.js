import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  name = "field-name",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  error = false,
}) => {
  let component;
  const inputClass = error ? "inputField-error" : "";

  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          id={name}
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = 
      <textarea 
      id={name}
      name={name} 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputClass}
      data-testid="field-testid" 
      />;
      break;
    default:
      component = (
        <input
          id={name}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
          data-testid="field-testid"
        />
      );
  }

  return (
    <div className="inputField">
      <span><label htmlFor={name}>{label}</label></span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default Field;
