import React from "react";
import PropTypes from "prop-types";

/**
 * PrimaryText12
 * [PrimaryText12 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const PrimaryText12 = props => <p>{props.text}</p>;

PrimaryText12.propTypes = {
  text: PropTypes.string.isRequired
};

export default PrimaryText12;
