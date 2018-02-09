import React from "react";
import PropTypes from "prop-types";

/**
 * PrimaryText14
 * [PrimaryText14 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const PrimaryText14 = props => <p>{props.text}</p>;

PrimaryText14.propTypes = {
  text: PropTypes.string
};

export default PrimaryText14;
