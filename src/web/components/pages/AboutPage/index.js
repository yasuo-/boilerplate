import React from "react";
import Header from "../../organisms/Header";
import AboutPageContents from "../../organisms/AboutPageContents";
import WhatsRetail from "../../organisms/AboutPageContents/whatsRetail";
import ReviewOfTheExam from "../../organisms/AboutPageContents/reviewOfTheExam";
import WhenToText from "../../organisms/AboutPageContents/whenToText";
import Merit from "../../organisms/AboutPageContents/merit";
import Renewalystem from "../../organisms/AboutPageContents/renewalystem";
import TopPageButton from "../../atoms/FinishButton";

/**
 * AboutPage
 * @param props
 * @returns {XML}
 * @constructor
 */
const AboutPage = props => {
  const path = parseInt(props.match.params.number);

  /**
   * rendring
   * @param path
   * @returns {XML}
   */
  const rendring = path => {
    switch (path) {
      case 1:
        return <WhatsRetail />;
      case 2:
        return <ReviewOfTheExam />;
      case 3:
        return <WhenToText />;
      case 4:
        return <Merit />;
      case 5:
        return <Renewalystem />;
      default:
        return <AboutPageContents />;
    }
  };

  return (
    <div className="l-page">
      <Header />
      <div className="l-main container about">{rendring(path)}</div>
      <TopPageButton finish="on" linkToText="/" LinkText="Topへ" />
    </div>
  );
};

export default AboutPage;
