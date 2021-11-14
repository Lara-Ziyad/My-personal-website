import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg:     #eba825  ;
    --dark-bg2:   #ffcb77;
    --offwhite: #fef9ef ;
    --darkoffwhite: #ffe2b3;
    --terc: #70b7ca ;
    --deep-terc: #8fcfcd ;
    --red: #de3a1c ;
    --white : white;
    --darkred:        #E02401 ; ;
    --purple:  #444398;
    --lightpurple: #6850ad;
    --dark-orange:  #da5406 ;
    --orange:       #dd7a05;
    --text-blue: #407085;
   
  }
  html{
    font-size: 10px;
    background-image: linear-gradient(to bottom left,var(--offwhite), var(--dark-bg));
    
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--terc);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--terc);
      .scrollbar-thumb-y {
        background: var(--terc);
      }
    }
  }
`;
export default GlobalStyles;
