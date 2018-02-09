import React from "react";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import UserInfo from "../../organisms/UserInfo";
import TopPageContents from "../../organisms/TopPageContents";

const TopPage = props => (
  <div className="l-page l-top">
    <Header />
    <UserInfo
      userCorrect={props.score.userCorrect}
      quizTryLength={props.score.quizTryLength}
    />
    <div className="l-main container">
      <h4 className="c-page-title">コース</h4>
      <TopPageContents />
    </div>
  </div>
);

export default TopPage;
