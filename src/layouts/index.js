import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./layouts.css";
function Layouts(props) {
  return (
    <div>
      <Header />
      <div className="screens">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layouts;
