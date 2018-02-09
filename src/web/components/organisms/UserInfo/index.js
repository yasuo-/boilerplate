import React from "react";
import PropTypes from "prop-types";

/**
 * UserInfo
 * @param {*} props
 */
const UserInfo = props => (
  <section className="top-userInfo bg-primary">
    <div className="box_in">
      <p className="fc-primary">前回のScore</p>
      <h2 className="fc-center fc-primary">
        {props.userCorrect}/{props.quizTryLength}
      </h2>
    </div>

    <div className="u-flex">
      <section className="box01 u-col-01">
        <div className="box_in">
          <p className="fc-12 fc-primary">最終練習日</p>
          <p className="fc-center fc-14 fc-primary">2017/10/20</p>
        </div>
      </section>

      <section className="box01 u-col-01">
        <div className="box_in">
          <p className="fc-12 fc-primary">連続練習回数(日)</p>
          <p className="fc-center fc-14 fc-primary">1日</p>
        </div>
      </section>
    </div>
  </section>
);

export default UserInfo;
