import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../styles/theme';

export const Linker = styled(Link)`
  color: ${({ color, theme }) => color || theme.themeBlack };
  &:hover { color: ${({ colorHov }) => colorHov}; }
  font-size: ${({ fontSize }) => fontSize };
`;

const StyledButton = styled.button`
  ${flexCenter};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color, theme }) => color || theme.themeBlack };
  background: ${({ background }) => background};
  border: 1px solid ${({ border }) => border || 0};
  &:hover { 
    background: ${({ backgroundHov }) => backgroundHov};
    border-color: ${({ borderHov }) => borderHov};
  }
  border-radius: ${({ radius, theme }) => radius || theme.radius};
`;

export const Button = ({ 
  children, 
  width, margin, padding, 
  color, background, border, backgroundHov, borderHov, radius }) => {
  return (
    <StyledButton 
      width={width} margin={margin} padding={padding} 
      color={color} background={background} backgroundHov={backgroundHov}
      border={border} borderHov={borderHov} radius={radius}>
      {children}
    </StyledButton>
  )
}
