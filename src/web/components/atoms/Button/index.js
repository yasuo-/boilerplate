import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FinishButton = props =>
  props.finish === "on" ? (
    <button className="button-white button-next">
      <Link to={props.linkToText} className="u-display-b">
        {props.LinkText}
      </Link>
    </button>
  ) : null;

FinishButton.propTypes = {
  finish: PropTypes.string.isRequired,
  linkToText: PropTypes.string,
  LinkText: PropTypes.string
};

export default FinishButton;
