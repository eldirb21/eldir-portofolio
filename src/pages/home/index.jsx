import React from "react";
import { connect } from "react-redux";
import { photo } from "../../assets/images";
import Footer from "../../layouts/footer";
import styles from "./home.module.css";
export const Home = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles.absoluteItem}>
        <div>
          <button type="submit">Resume</button>
        </div>
        <div>
          <button type="button">Contact</button>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileItem}>
          <p>Hi,</p>
          <h1>Eldir Buulolo</h1>
          <p>I am Software Defelopment</p>
        </div>
        <div className={styles.profileItem}>
          <img className={styles.imgPhoto} src={photo} alt="profile" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
