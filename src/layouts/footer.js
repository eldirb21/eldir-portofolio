import React from "react";
import "./layouts.css";

function Footer(props) {
  return (
    <footer
      class="footer"
      style={{ backgroundColor: "rgba(232,214,196,1.00)" }}
    >
      <div class="content">
        <p class="text-center">
          Copyright © 2023 <a href="https://github.com/eldirb21"> eldiro </a>{" "}
          all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
