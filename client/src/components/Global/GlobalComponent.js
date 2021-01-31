import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../Styles/theme';

// styled Link
export const Linker = styled(Link)`
  width: ${({ width }) => width };
  height: ${({ height }) => height };
  color: ${({ color, theme }) => color ? color : theme.themeBlack };
  &:hover { color: ${({ colorHov }) => colorHov}; }
  font-size: ${({ fontSize }) => fontSize };
`;

const StyledButton = styled.button`
  ${flexCenter};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  font-size: ${({ fontSize }) => fontSize};
`;

// styled button
export const Button = ({ 
  children, onClick,
  width, height, margin, padding, 
  color, background, border, backgroundHov, borderHov, 
  radius, fontSize }) => {
  return (
    <StyledButton 
      width={width} height={height} margin={margin} padding={padding}
      color={color} background={background} backgroundHov={backgroundHov}
      border={border} borderHov={borderHov} radius={radius} fontSize={fontSize}
      onClick={onClick}
      >
      {children}
    </StyledButton>
  )
}


const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  border-radius: ${({ radius }) => radius ? radius : "10px"};
`;

// styled img
export const Image = ({ src, alt, width, height, radius }) => {
  return (
    <StyledImage 
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={radius}
    />
  )
}

// grid-box for home
export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ repeat }) => repeat}, 1fr);
  grid-gap: ${({ gap }) => gap ? gap : "15px"};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin ? margin : "0 auto"};
  padding: ${({ padding }) => padding};
`;
