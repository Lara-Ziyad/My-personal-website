import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
 
 
  .servicesItem__icon {
    background-image: linear-gradient(to bottom left,var(--offwhite), var(--dark-bg));
        
   border-radius: 50%;
      
      height: 18rem;
      width:18rem;
      font-size: 3rem;
      
 
      border:0px;
      margin-bottom: 2rem;
   
    svg {
      width: 12rem; 
      color: var( --deep-terc);  
      padding: .5rem; 

    }
  }
  .servicesItem__icon:hover {
   
      background: var( --deep-terc); 
      svg {   
       color: var(--darkoffwhite);
    }

  }

  .servicesItem__title {
    font-size: 2.8rem;
    font-family: 'DosisSemiBold';
    color: var(--offwhite);
    
  }
  .para {
    margin-top: 1rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
  
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">
       
       
        {icon} </div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
