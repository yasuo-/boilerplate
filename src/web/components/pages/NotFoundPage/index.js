import React from "react";
import Header from "../../organisms/Header";
import TopPageButton from "../../atoms/FinishButton";

/**
 * NotFoundPage
 * その他
 * @param props
 * @returns {XML}
 * @constructor
 */
const NotFoundPage = props => (
  <div className="l-page">
    <Header />
    <div className="l-main container">
      <div>
        <h1>Not Found</h1>
      </div>
    </div>
    <TopPageButton finish="on" linkToText="/" LinkText="Topへ" />
  </div>
);

export default NotFoundPage;
