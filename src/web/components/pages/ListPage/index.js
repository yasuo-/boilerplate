import React from "react";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";

const ListPage = props => {
  const level = props.match.params.level;
  const countArray = props.fetchQuizLists.training.level.three;
  countArray.sort((a, b) => {
    if (a.number > b.number) return -1;
    if (a.number < b.number) return 1;
    return 0;
  });

  return countArray.length === 0 ? (
    <div className="l-page l-top">
      <Header />
      <div className="l-main container">
        <p>Please wait...</p>
      </div>
    </div>
  ) : (
    <div className="l-page l-top">
      <Header />
      <div className="l-list">
        <ul className="lists">
          {countArray.map(item => (
            <li key={item.number} className="list">
              <Link to={`/type/${level}/${item.number}`} className="list-item">
                <h5 className="list-title">第{item.number}回試験</h5>
                <span className="list-text">{item.event_date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
