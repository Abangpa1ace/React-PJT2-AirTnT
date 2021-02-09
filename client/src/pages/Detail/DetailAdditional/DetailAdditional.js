import React from 'react'
import styled from 'styled-components';
import AddReview from './components/AddReview';
import AddMap from './components/AddMap';
import AddHost from './components/AddHost';
import AddRules from './components/AddRules';

const DetailAdditional = () => {
  return (
    <Detailadditional>
      <AddReview />
      <AddMap />
      <AddHost />
      <AddRules />
    </Detailadditional>
  )
}

const Detailadditional = styled.section`
  width: 100%;
  p {
    font-size: 16px;
    line-height: 1.5;
  }

  span {
    color: ${({ theme }) => theme.gray2};
  }
`;

export default DetailAdditional;
