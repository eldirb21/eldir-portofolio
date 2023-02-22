import React from "react";
import { connect } from "react-redux";
import { sample } from "../../assets/images";
import styles from "./opensource.module.css";

export const Opensource = (props) => {
  return (
    <div className="container">
      <div className={styles.cardItem}>
        <div className={styles.content}>
          <img src={sample} />
          <div className={styles.description}>
            <h1>Swipes Chat</h1>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <em>
              <a href="https://github.com/eldirb21/eldir-portofolio">
                Uri : https://github.com/eldirb21/eldir-portofolio
              </a>
            </em>
          </div>
        </div>
      </div>

      <div className={(styles.cardItem, styles.cardItemRight)}>
        <h1>Swipes Chat</h1>
        <div>
          <img src={sample} />
          <div>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Opensource);
