import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as Functions from "../../../services/functions";

/**
 * CardLink
 * カードリンク
 * @param {*} props
 */
const CardLink = props => {
  // 第?回目 変わる
  // todo:: data取得
  const maxNumber = 79;
  const minNumber = 72;
  const minQuizNumber = 1;
  const maxQuizNumber = 5;

  const path = props.number !== "ランダム" ? "quiz" : "randomQuiz";
  // ランダムなら72~79回のランダム
  // 第何回があればそのまま
  const getNumber =
    props.number !== "ランダム"
      ? props.number
      : Functions.getRandomInt(minNumber, maxNumber);
  // const getNumber = '79'
  // ランダムなら
  // クイズの問題Number 1 ~ 5 ランダム
  // それ以外は 1
  const getQuizNumber =
    props.number !== "ランダム"
      ? 1
      : Functions.getRandomInt(minQuizNumber, maxQuizNumber);

  return (
    <div className="card-link">
      <Link
        to={`/${path}/${props.level}/${getNumber}/${props.type}/${
          props.category
        }/${getQuizNumber}`}
      >
        始める
      </Link>
    </div>
  );
};

CardLink.propTypes = {
  number: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,
  level: PropTypes.number
};

export default CardLink;
