import React from "react";
import { connect } from "react-redux";
import { logoEmco } from "../../assets/images";
import styles from "./experience.module.css";
export const Experience = (props) => {
  return (
    <div className="container">
      {[1, 2, 3, 2].map((item, index) => {
        return (
          <div className={styles.content}>
            <div className={`row ${styles.companies}`}>
              <img src={logoEmco} />
              <div>
                <h2>PT EMCO DIGITAL INDONESIA</h2>
                <h6>Periode : April 2020 - Sept 2020</h6>
              </div>
            </div>

            <div className={styles.companiesDesc}>
              <h5>About Company</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className={styles.companiesDesc}>
              <h5>Company Web : </h5>
              <a href="http://">PT EMCO DIGITAL INDONESIA</a>
            </div>

            <div className={`row ${styles.roles}`}>
              <div className={styles.rolesItem}>
                <h5>My Job Desc</h5>
                <ul>
                  <li>Create New App Create New App Create New A a a</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                </ul>
              </div>
              <div className={styles.rolesItem}>
                <h5>My Tools Job Desc</h5>
                <ul>
                  <li>Create New App</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                  <li>Create New App</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
