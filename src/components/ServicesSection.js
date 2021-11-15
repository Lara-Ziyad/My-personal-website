import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import BackImg from './../assets/images/bGround/CSS-background-gradient-featured.jpg'
const ServicesItemsStyles = styled.div`
  padding:15rem 0;
  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color : var(--red); */
  height: 750px;
  margin-top: 0rem;
  
  .container{
    display: flex;
    flex-direction: column; 
  justify-content:center;
  align-items:center;
 
  

  }
  .services__allItems {
    width:950px;
    display: flex;
    /* flex-direction: column; */
    gap: 3rem;
    justify-content:center;
    margin-top: 1rem;
    /* background-color: rgba(232,197,197,20%); */
    padding:8rem 5rem;
    border-radius: 10px;
    
  }
  /* .vl {
    margin-top:1rem;
    border-left: 2px solid white;
     height: 300px;
   
  } */
  @media only screen and (max-width: 800px) {
    height:1350px;
    padding: 6rem 0;

    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
  
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i can do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc=" Website with unique look"
          />
          <div className="vl"> </div>
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web dev"
            desc="High performance website with blazing fast speed"
          />
          <div className="vl"> </div>
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Mobile application with eye catching UI "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
