import { css } from 'styled-components';

const theme = {
  navWidth: '1600px',
  themeBlack: '#222222',
  themePink: '#FF385C',
  gray0: '#DDDDDD',
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;