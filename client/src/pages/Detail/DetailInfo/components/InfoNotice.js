import React from 'react';
import styled from 'styled-components';
import DetailConBox from '../../common/DetailConBox';
import { DETAIL_NOTICE } from '../../DetailData';

const InfoNotice = () => {
  return (
    <DetailConBox>
      <ul>
        {DETAIL_NOTICE.map((notice) => {
          const { id, svg, text, desc, link } = notice;
          return (
            <NoticeItem key={id}>
              {svg}
              <div>
                <p>{text}</p>
                <span>{desc}</span>
                {link && <a href={link}>자세히 보기</a>}
              </div>
            </NoticeItem>
          )
        })}
      </ul>
    </DetailConBox>
  )
}

const NoticeItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 0 0 30px;

  &:last-child {
    margin: 0;
  }

  svg {
    width: 25px;
    height: 25px;
    margin: 0 15px 0 0;
  }

  p {
    padding: 0 0 7px;
    font-weight: bold;
  }

  a {
    margin: 0 0 0 5px;
    color: ${({ theme }) => theme.themeBlack};
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default InfoNotice

