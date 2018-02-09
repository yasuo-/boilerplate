import React from "react";
import PropTypes from "prop-types";

/**
 * SecondryText12
 * [SecondryText12 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const SecondryText12 = props => <p>{props.text}</p>;

SecondryText12.propTypes = {
  text: PropTypes.string
};

export default SecondryText12;
