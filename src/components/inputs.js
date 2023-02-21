import React from "react";
import "./components.css";
function Inputs(props) {
  if (props.type === "textarea")
    return (
      <textarea
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.options.required ? true : false}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
      />
    );

  return (
    <input
      className={props.className}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      required={props.options.required ? true : false}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onClick={props.onClick}
    />
  );
}

export default Inputs;
