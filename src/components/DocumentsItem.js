import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const DocitemStyles = styled.div`
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:.5rem;
  margin-bottom:5rem;
 
 
  .servicesItem__icon {
    background-image: linear-gradient(to bottom left,var(--orange)70%, var(--dark-orange));
        
   border-radius: 50%;
      
      height: 7rem;
      width:7rem;
      font-size: 3rem;
      
      cursor: pointer;
      border:0px;
    
      word-wrap: break-word;
   
   
    svg {
      width: 4rem; 
      color: var( --offwhite);  
      padding: .3rem; 

    }
  

  }
  .servicesItem__icon:hover {
   
      background: var( --terc); 
      svg {   
       color: var(--darkoffwhite);
    }

  }

  .servicesItem__title {
    font-size: 1.5rem;
    font-family: 'DosisBold ';
    color: var(--orange);
    
  }

`;

export default function DocItem({
 text ="",
  icon = <div/>,
  title = '',
  link = ""
}) {
  return (
    <DocitemStyles className="servicesItem">
      
      <div className="servicesItem__icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
     </a>
      
      </div>
      <div className="servicesItem__title">{title}</div>
   
    </DocitemStyles>
  );
}
