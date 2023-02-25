import React, { useState } from "react";
import { connect } from "react-redux";
import { avatar } from "../../assets/images";
import Avatar from "../../components/avatar";
import Inputs from "../../components/inputs";
import { contactFields } from "../../data";
import styles from "./about.module.css";

const validate = (value, options) => {
  if (options.required) {
    if (!value || value === "") return false;
  }
  if (options.length) {
    if (value.length > 120) return false;
  }
  if (options.email) {
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        value
      )
    )
      return false;
  }
  if (options.url) {
    if (
      !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        value
      )
    )
      return false;
  }
  return true;
};

export const About = (props) => {
  const [state, setState] = useState(contactFields);
  function _onChangeComplete(change) {
    // var newState=[...state]
    // newState
    // setState({
    //   ...state,
    //   value: change.target.value,
    // });
  }
  function _onBlur(e) {
    console.log(e);
    // console.log(e.target.id, e.target.value);
    // const { id, value } = e.target;
    // const valid = validate(value, state[id].options);
    // setState((state) => {
    //   state[id].valid = valid;
    //   return state;
    // });
  }
  return (
    <div className="container">
      <div className={styles.headers}>
        <Avatar className={styles.avatar} src={avatar} alt="User Avatar" />
        <h1>Eldir buulolo</h1>
        <h2>eldirb04@gmail.com</h2>
      </div>

      <div className={`${styles.about} ${styles.itempadding}`}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`${styles.motto} ${styles.itempadding}`}>
        <h1>Motto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`${styles.resume} ${styles.itempadding}`}>
        <h1>CV & Resume</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={`${styles.education} ${styles.itempadding}`}>
        <h1>Education</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`${styles.whatIdo} ${styles.itempadding}`}>
        <h1>What I do Now ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`${styles.contactme} ${styles.itempadding}`}>
        <form noValidate>
          <h1>Contact me </h1>
          <fieldset>
            {state.map((item, index) => {
              return (
                <div key={index} className={styles.formInput}>
                  <label htmlFor={item.id}>{item.label}</label>
                  <Inputs
                    className={styles.inputText}
                    options={item}
                    type={item.label === "Message" && "textarea"}
                    placeholder={item.placeholder}
                    value={item.value}
                    valid={item.valid}
                    onBlur={_onBlur}
                    // onClick={this._resetValidation}
                    onChange={_onChangeComplete}
                  />
                </div>
              );
            })}
          </fieldset>
          <div className={styles.btncontent}>
            <input
              type="submit"
              title="Send"
              value={"Send"}
              // value={this.props.submitText}
              // onClick={this._submit}
              // className="form-submit"
            />
          </div>
        </form>
      </div>
      <div className={styles.margin}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
