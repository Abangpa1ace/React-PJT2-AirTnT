import React, { useState } from 'react';
import styled from 'styled-components';
import { flexAlign } from '../../../../../Styles/theme';
import { TYPESDATA } from '../FilterData';
import FilterModalBox from './FilterModalBox';

const FilterTypes = () => {
  const [types, setTypes] = useState(TYPESDATA);

  const toggleCheck = (id) => {
    const newTypes = types.map((type) => {
      const newChecked = id === type.id ? !type.checked : type.checked;
      return {
        ...type,
        checked: newChecked,
      }
    })
    setTypes(newTypes);
  }

  const ClearTypes = () => {
    const newTypes = types.map((type) => {
      return {
        ...type,
        checked: false,
      }
    })
    setTypes(newTypes);
  }

  return (
    <FilterModalBox width="350px" onClickDelete={ClearTypes} onClickSave>
      <TypeContainer>
        {types.map((type, idx) => {
          const { id, typeEn, title, desc, checked } = type;
          return (
            <TypeContent key={id}>
              <input type="checkbox" 
                checked={checked} 
                onClick={() => toggleCheck(id)}
              />
              <section>
                <h4>{title}</h4>
                <p>{desc}</p>
              </section>
            </TypeContent>
          )
        })}
      </TypeContainer>
    </FilterModalBox>
  )
}

const TypeContainer = styled.ul`
  padding: 20px 15px;
`;

const TypeContent = styled.li`
  ${flexAlign};
  padding: 10px 0;

  input {
    width: 20px;
    margin: 0 10px 0 0;
  }

  h4 { 
    padding: 0 0 5px 0;
    font-size: 18px;
    font-weight: normal; 
  }

  p {
    display: block;
    max-width: 250px;
    line-height: 1.3;
  }
`;

export default FilterTypes;