import React, { useState } from "react";
import { connect } from "react-redux";
import { sample } from "../../assets/images";
import styles from "./opensource.module.css";

export const Opensource = (props) => {
  const [projects, setProjects] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="container">
      {projects.map((item, index) => {
        return (
          <div
            className={`row ${
              index % 2 == 0 ? styles.content : styles.contentReverce
            }`}
          >
            <div className={styles.contentLeft}>
              <h2>Swipes Chat</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className={styles.url}>
                <h5>Project URL : </h5>
                <a href="https://github.com/eldirb21/eldir-portofolio">
                  eldir-portofolio
                </a>
              </div>
            </div>
            <div className={styles.contentRight}>
              <img src={sample} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Opensource);
