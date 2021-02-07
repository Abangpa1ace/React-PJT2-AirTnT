import React from 'react';
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import { flexAlign, flexBetween } from '../../../../Styles/theme';
import { BsStarFill } from 'react-icons/bs';
import { REVIEW_SCORE, REVIEW_RECORD } from '../../DetailData';

const AddReview = () => {
  return (
    <DetailConBox>
      <ReviewHead>
        <BsStarFill />4.83(후기 60개)
      </ReviewHead>
      <ReviewGrid>
        {REVIEW_SCORE.map((score) => {
          const { id, text, point } = score;
          return (
            <ScoreItem key={id}>
              <p>{text}</p>
              <div>
                <ScoreBar point={point} />
                <span>{point.toFixed(1)}</span>
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

            </RecordItem>
          )
        })}
      </ReviewGrid>
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
`;

export default AddReview
