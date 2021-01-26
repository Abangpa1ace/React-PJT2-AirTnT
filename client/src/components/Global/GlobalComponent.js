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

export const Button = ({ children, width, margin, padding, color, background, background2, radius }) => {
  return (
    <StyledButton 
      width={width} 
      margin={margin} 
      padding={padding} 
      color={color} 
      background={background} 
      background2={background2}
      radius={radius}>
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

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ repeat }) => repeat}, 1fr);
  grid-gap: ${({ gap }) => gap ? gap : "15px"};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin ? margin : "0 auto"};
  padding: ${({ padding }) => padding};
`;