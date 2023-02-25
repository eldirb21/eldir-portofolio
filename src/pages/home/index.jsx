import React from "react";
import { connect } from "react-redux";
import { photo } from "../../assets/images";
import Footer from "../../layouts/footer";
import styles from "./home.module.css";
export const Home = (props) => {
  return (
    <div className="container">
      <div className={`row ${styles.absoluteItem}`}>
        <button type="submit">Resume</button>
        <button type="button">Contact</button>
      </div>

      <div className={`row ${styles.profile}`}>
        <div className={`row ${styles.profileLeft}`}>
          <p>Hi,</p>
          <h1>Eldir Buulolo</h1>
          <p>I am Software Development</p>
        </div>
        <div className={styles.profileRight}>
          <img  src={photo} alt="profile" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
