import React from "react";
import "./components.css";
function Avatar({ src, alt, className }) {
  return (
    <div className={`avatar ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
