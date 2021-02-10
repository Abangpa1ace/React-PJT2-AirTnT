import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import { useGlobalContext } from '../../../../Context';
import { Button } from '../../../../GlobalComponents/Common/StyledCommon';
import DetailCircleImg from '../../DetailCircleImg';
import { flexAlign, flexBetween } from '../../../../Styles/theme';
import { BsStarFill } from 'react-icons/bs';
import { REVIEW_SCORE, REVIEW_RECORD } from '../../DetailData';

const AddReview = () => {
  const { restDetail } = useGlobalContext();

  let likeAvg, likeCount;
  if (restDetail.like) {
    likeCount = restDetail.like.likeReviews.length;
    likeAvg = (restDetail.like.likeReviews.map(review => Object.values(review.score).reduce((a,b) => a+b) / 6).reduce((a,b) => a+b) / likeCount).toFixed(2)
  }

  const [reviewScore, setReviewScore] = useState({
    clean: 0,
    accuracy: 0,
    communication: 0,
    spot: 0,
    check: 0,
    cost_effective: 0,
  });

  useEffect(() => {
    avgReviewScore()
  }, [restDetail])

  const avgReviewScore = () => {
    if (restDetail.like) {
      const { likeReviews } = restDetail.like;
      let newScoreObj = reviewScore;
      for (let review of likeReviews) {
        for (let key in review.score) {
          newScoreObj[key] += review.score[key]
        }
      }
      for (let key in newScoreObj) {
        const newScoreVal = newScoreObj[key]/likeReviews.length
        newScoreObj[key] = newScoreVal;
      }
      setReviewScore(newScoreObj);
    }
  }


  return (
    <DetailConBox>
      <ReviewHead>
        <BsStarFill />{`${likeAvg}(후기 ${likeCount}개)`}
      </ReviewHead>
      <ReviewGrid>
        {REVIEW_SCORE.map((score) => {
          const { id, text, key } = score;
          return (
            <ScoreItem key={id}>
              <p>{text}</p>
              <div>
                <ScoreBar point={reviewScore[key]} />
                <span>{reviewScore[key].toFixed(1)}</span>
              </div>
            </ScoreItem>
          )
        })}
      </ReviewGrid>
      <ReviewGrid>
        {REVIEW_RECORD.map((record) => {
          const { id, img, name, date, content } = record;
          return (
            <RecordItem key={id}>
              <header>
                <DetailCircleImg src={img} alt="reviewer-profile" length="60px" marginRight="15px" />
                <div>
                  <p>{name}</p>
                  <span>{date}</span>
                </div>
              </header>
              <p>{content}</p>
            </RecordItem>
          )
        })}
      </ReviewGrid>
      <Button
        padding="15px 25px"
        border={({ theme }) => theme.themeBlack}
        fontSize="16px"
        backgroundHov={({ theme }) => theme.gray0}
        radius="10px"
      >
        후기 {restDetail.like && restDetail.like.likeReviews.length}개 모두 보기
      </Button>
    </DetailConBox>
  )
}

const ReviewHead = styled.h4`
  ${flexAlign};

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.themePink };
    transform: translateY(-2px);
    margin: 0 5px 0 0;
  }
`;

const ReviewGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${({ rowGap }) => rowGap || '20px'};
  padding: 15px 0;
`;

const ScoreItem = styled.li`
  ${flexBetween};
  padding: 0 100px 0 0;

  div { 
    ${flexAlign};

    span {
      color: initial;
      font-size: 12px;
      font-weight: bold;
    }
  };
`;

const ScoreBar = styled.div`
  position: relative;
  width: 120px;
  height: 3px;
  margin: 0 15px 0 0;
  border-radius: 2px;
  background: ${({ theme }) => theme.gray1};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ point }) => `${point/5 * 100}%`};
    height: 3px;
    background: ${({ theme }) => theme.themeBlack};
  }
`;

const RecordItem = styled.li`
  padding: 0 100px 0 0;
  margin: 0 0 20px;

  header {
    ${flexAlign};
    margin: 0 0 15px;
    p { 
      padding: 0 0 5px;
      font-weight: bold;
    };
  }
  
  & > p {
    line-height: 1.5;
  }
`;

export default AddReview
