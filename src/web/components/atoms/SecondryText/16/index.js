import React from "react";
import PropTypes from "prop-types";

/**
 * SecondryText16
 * [SecondryText16 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const SecondryText16 = props => <p>{props.text}</p>;

SecondryText16.propTypes = {
  text: PropTypes.string
};

export default SecondryText16;
