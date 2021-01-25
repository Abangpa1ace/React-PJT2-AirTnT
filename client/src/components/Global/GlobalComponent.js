import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../styles/theme';

export const Linker = styled(Link)`
  color: ${({ color, theme }) => color ? color : theme.themeBlack };
  &:hover { color: ${({ color2 }) => color2}; }
  font-size: ${({ fontSize }) => fontSize };
`;

const StyledButton = styled.button`
  ${flexCenter};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color, theme }) => color ? color : theme.themeBlack };
  background: ${({ background }) => background};
  &:hover { background: ${({ background2 }) => background2}; }
  border-radius: ${({ radius, theme }) => radius ? radius : theme.radius};
`;

export const Button = ({ children, width, margin, padding, color, background, background2 }) => {
  return (
    <StyledButton width={width} margin={margin} padding={padding} color={color} background={background} background2={background2}>
      {children}
    </StyledButton>
  )
}
