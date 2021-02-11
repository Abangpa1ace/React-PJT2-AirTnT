import React from 'react';
import styled from 'styled-components';
import DetailConBox from '../../common/DetailConBox';
import { RULES_LIST } from '../../DetailData';

const AddRules = () => {
  return (
    <DetailConBox head="알아두어야 할 사항">
      <RulesGridBox>
        {RULES_LIST.map(rules => {
          const { title, list } = rules;
            return (
              <RulesList>
                <h6>{title}</h6>
                {list.map(rule => {
                  const { svg, desc } = rule;
                  return (
                    <RulesItem>
                      {svg}
                      <p>{desc}</p>
                    </RulesItem>
                  )
                }
                )}
                <p>자세히 보기 ▶︎</p>
              </RulesList>
            )
          }
        )}
      </RulesGridBox>
    </DetailConBox>
  )
}

const RulesGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;

  & > ul {
    padding: 0 50px 0 0;
  }
`;

const RulesList = styled.ul`
  h6 {
    margin: 0 0 20px;
  }

  & > p {
    margin: 20px 0 0;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const RulesItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;

  svg {
    margin: 0 15px 0 0;
  }
`;

export default AddRules
