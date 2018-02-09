import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CardLink from "../../molecules/CardLink";

/**
 * categoryList
 * @param {*} props
 */
const categoryList = props => {
  /**
   * list
   * category loop
   */
  const list = props.category.map(list => (
    <article key={list.link} className="card">
      <img className="card-img" src="/assets/images/lp/values-bg.jpg" alt="" />
      <div className="card-content">
        <h1 className="card-title">{list.name}</h1>
        <p className="card-text u-default-font">
          {props.level}級 第{props.number}回 {props.typeName}
        </p>
      </div>
      <CardLink
        level={props.level}
        number={props.number}
        type={props.link}
        category={list.link}
      />
    </article>
  ));

  return <div className="category-list-card">{list}</div>;
};

export default categoryList;
