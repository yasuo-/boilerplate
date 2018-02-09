import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

// import { LogoImage } from '../../atoms/LogoImage'

/**
 * Title
 * @param {*} props
 */
const Title = () => (
  <Link to="/" exact className="link-text">
    <h1 className="home">title</h1>
  </Link>
);

export default Title;
