import { css } from 'styled-components';

const theme = {
  webWidth: '1600px',
  themeBlack: '#222222',
  themePink: '#FF385C',
  themePinkDarker: '#E7204D',
  themeWarning: '#C13515',
  gray0: '#F4F4F4',
  gray1: '#DDDDDD',
  gray2: '#757575',
  radius: '32px',
  shadowDown: `0px 1px 5px 1px #aaaaaa`,
  shadowDiagonal: `1px 1px 5px 1px #aaaaaa}`,
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

export const flexAlignCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;