import React from "react";
import PropTypes from "prop-types";
import NextLinkButton from "../../atoms/LinkText/12";
import FinishButton from "../../atoms/FinishButton";

/**
 * BottomBar
 * @param {*} props
 */
const BottomBar = props =>
  props.active === true ? (
    <div
      className={`${
        props.active === true ? "c-bottombar--active" : "c-bottombar"
      }`}
    >
      <div className="c-bottombar-area">
        <section className="box01">
          <div className="box_in">
            <h2 className="fc-center fc-primary">{props.answerText}</h2>
          </div>
        </section>
        <div className="c-bottombar-linkArea">
          <NextLinkButton
            linkToText={props.nextLinkTo}
            classNameText={props.nextLinkClassName}
            text={props.nextLinkText}
            defaultState={props.defaultState}
          />
          <FinishButton
            finish={props.finish}
            linkToText={props.finishLinkTo}
            LinkText={props.finishLinkText}
          />
        </div>
      </div>
    </div>
  ) : null;

export default BottomBar;
