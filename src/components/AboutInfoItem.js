import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 3rem;
  margin-left:30rem;
 
  .title {
    margin-top: 1rem;
    font-size: 2.2rem;
    margin-left: 10rem;
    color: var(--offwhite);
    font-family: 'DosisSemiBold';
  }
  .items {
    margin-top: 1.5rem;
    display: flex;
  justify-content: flex-start;
    gap: 2rem;
    position: absolute;
    left: 38rem;
    top: -1rem;
    width: 55vw;
  }
  .item {
   
    padding: 0rem;
    border-radius: 8px;
    width: 200rem;
    text-align: left;
  }
 
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      width: 100vw;
     
    }
    .item { width:140rem;
     
      }

    .title {
      font-size: 2.5rem;
      margin-left: 0rem;
      
    }

    @media only screen and (max-width: 550px) {


       .title {margin-left: -40rem;}
  }}
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <p ><b className="title">{title}</b></p>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
