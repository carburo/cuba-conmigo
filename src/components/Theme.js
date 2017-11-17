import { injectGlobal } from 'styled-components';
import FranklinHeavy from '../fonts/Franklin Gothic Heavy Regular.ttf';

export const white = "#ffffff";
export const gray100 = "#f8f9fa";
export const gray200 = "#e9ecef";
export const gray300 = "#dee2e6";
export const gray400 = "#ced4da";
export const gray500 = "#adb5bd";
export const gray600 = "#868e96";
export const gray700 = "#495057";
export const gray800 = "#343a40";
export const gray900 = "#212529";
export const black = "#000000";
export const colorPrimary = "#dca459";

injectGlobal`
  @font-face {
    font-family: 'Franklin Heavy';
    font-style: normal;
    font-weight: 900;
    src: url('${FranklinHeavy}') format('truetype');
  }
`

const Theme = {
    primary: colorPrimary,
    background: white,
}

export default Theme;