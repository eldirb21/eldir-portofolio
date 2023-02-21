import React, { useState } from "react";
import { connect } from "react-redux";
import Inputs from "../../components/inputs";
import { contactFields } from "../../data";
import "./contact.css";

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

export const Contact = (props) => {
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
    <div className="contact">
      <form noValidate>
      <h1>Contact me</h1>
        <fieldset>
          {state.map((item, index) => {
            return (
              <div key={index} className="form-row">
                <label htmlFor={item.id}>{item.label}</label>
                <Inputs
                  options={item}
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
        <div className="submit-row">
          <input
            type="submit"
            // value={this.props.submitText}
            // onClick={this._submit}
            className="form-submit"
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
