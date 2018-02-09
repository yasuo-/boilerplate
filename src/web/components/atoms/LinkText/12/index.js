import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * LinkText12
 * [LinkText12 description]
 * @param {[type]} props [description]
 * @return {JSX}
 */
const LinkText12 = props => (
  <Link
    to={props.linkToText}
    className={props.classNameText}
    onClick={props.defaultState}
  >
    {props.text}
  </Link>
);

LinkText12.propTypes = {
  classNameText: PropTypes.string,
  linkToText: PropTypes.string,
  text: PropTypes.string,
  defaultState: PropTypes.func
};

export default LinkText12;
