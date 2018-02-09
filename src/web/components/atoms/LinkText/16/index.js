import React from "react";
import PropTypes from "prop-types";

/**
 * PrimaryText16
 * [PrimaryText16 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const PrimaryText16 = props => <p>{props.text}</p>;

PrimaryText16.propTypes = {
  text: PropTypes.string
};

export default PrimaryText16;
