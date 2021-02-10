import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { useGlobalContext } from '../../../../Context';
import { flexAlign } from '../../../../Styles/theme';
import DetailConBox from '../../DetailConBox';
import { FACILITY_ICONS } from '../../DetailData';

const InfoFacility = () => {
  const { restDetail } = useGlobalContext();
  return (
    <DetailConBox head="편의시설">
      <FacilityGrid>
        {restDetail.subInfo && restDetail.subInfo.slice(0,10).map(facility => 
          <FacilityItem>
            {FACILITY_ICONS[facility]}
            <p>{facility}</p>
          </FacilityItem>
        )}
      </FacilityGrid>
      <Button
        padding="15px 25px"
        margin="40px 0 0"
        border={({ theme }) => theme.themeBlack}
        fontSize="16px"
        backgroundHov={({ theme }) => theme.gray0}
        radius="10px"
      >
        편의시설 {restDetail.subInfo && restDetail.subInfo.length}개 모두 보기
      </Button>
    </DetailConBox>
  )
}

const FacilityGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FacilityItem = styled.li`
  ${flexAlign};
  margin: 10px 0;
  
  svg {
    margin: 0 15px 0 0;
  }
`;

export default InfoFacility
