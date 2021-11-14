import { createGlobalStyle } from 'styled-components';

import DosisRegular from '../assets/fonts/static/Dosis-Regular.ttf';
import DosisBold from '../assets/fonts/static/Dosis-Bold.ttf';
import DosisSemiBold from '../assets/fonts/static/Dosis-SemiBold.ttf';
import DosisMedium from '../assets/fonts/static/Dosis-Medium.ttf';
import DosisLight from '../assets/fonts/static/Dosis-Light.ttf';


const Typography = createGlobalStyle`


  @font-face {
    font-family: 'DosisRegular';
    src: url(${DosisRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'DosisBold ';
    src: url(${DosisBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'DosisSemiBold';
    src: url(${DosisSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'DosisMedium ';
    src: url(${DosisMedium });
    font-style: normal;
  }
  @font-face {
    font-family: 'DosisLight  ';
    src: url(${DosisLight  });
    font-style: normal;
  }
  
  html,p{
    font-family: 'DosisMedium ';
    /* color: var(--terc); */
  }
  *{
    font-family: 'DosisMedium ';
    /* color: var(--purple); */
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'DosisBold '
    /* color: var(--offwhite); */
  }

`;

export default Typography;
