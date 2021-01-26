import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../Global/GlobalComponent';
import { FOOTERLINKDATA } from '../FooterData';

const Footerlinks = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  padding: 48px 0;
  border-bottom: 1px solid ${(props) => props.theme.gray1};

  ul {
    width: 25%;

    h4 { 
      font-size: 12px;
    }
    li {
      margin-top: 16px;
    }
  }
`;

const FooterLinks = () => {
  return (
    <Footerlinks>
      {FOOTERLINKDATA.map((ul) => {
        return <ul key={ul.id}>
          <h4>{ul.title}</h4>
          {ul.list.map((li) => {
            return <li key={li.id}><Linker to={li.link}>{li.text}</Linker></li>
          })}
        </ul>
      })}
    </Footerlinks>
  )
}

export default FooterLinks;
