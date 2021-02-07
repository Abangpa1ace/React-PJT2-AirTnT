import React from 'react'
import styled from 'styled-components';
import AddReview from './components/AddReview'

const DetailAdditional = () => {
  return (
    <Detailadditional>
      <AddReview />
    </Detailadditional>
  )
}

const Detailadditional = styled.section`
  width: 100%;
  p {
    font-size: 16px;
  }

  span {
    color: ${({ theme }) => theme.gray2};
  }
`;

export default DetailAdditional;
