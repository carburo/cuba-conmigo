import { colorPrimary } from "../color-variables"
import { injectGlobal } from 'styled-components';
import FranklinHeavy from '../fonts/Franklin Gothic Heavy Regular.ttf';

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
}

export default Theme;