import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';
import { Link } from 'react-router-dom';

const ItemStyles = styled.div`
  padding: 0 .5rem 0 1rem;
  background-color: var(--dark-bg2);
  display: flex;
  align-items: center;
  justify-content: flex-end;
 width: 100%;
  gap: 1rem;
  border-radius: 50px;
  margin-bottom: 2rem;
a {color:white;}
  .icon {
    color: var(--white);
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 2.5rem;
    color: var(--terc)
  }
  @media only screen and (max-width: 768px) {
   
    
      width:500px;
    
 
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
  link='',
}) {
  return (
    <ItemStyles>
      <div className="info">
        <PText><a href= {link}  target="_blank" >{text} </a></PText>
      </div>
      <div className="icon">{icon}</div>
      
    </ItemStyles>
  );
}
