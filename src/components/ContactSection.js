import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Map from './Map';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import FooterCol from './FooterCol';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  max-width: 1000px;
  height: 770px;


  
  .contactSection__wrapper {
    display: flex;
    height: 560px;
margin-left:-8rem;
margin-bottom:5rem;
margin-top:2rem;

    gap: 5rem;
    /* margin-bottom: 2rem; */
    width:900px;
    /* margin-left:150px; */
    /* margin-right:500px; */
    justify-content: space-between;
    position: relative;
    padding:3rem;
    background-color: var(--darkoffwhite);
  }
  .container{
  
    margin-top: -4rem;

   
  }
 
  .left {
    width: 50%;
    max-width: 600px;
    margin-top: 34rem;
    margin-left: 5rem;
 
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    margin-top: 7rem;
    height:100%;
  
  }
  @media only screen and (max-width: 768px) {
   overflow: hidden;
    .contactSection__wrapper {
      flex-direction: column;
      background-color:transparent;
      padding-bottom:10rem;
     
    }
    .contactSection__wrapper::after {
      display: none;
     
    }
    .left {
      max-width: 100%;
      margin-top: 0rem;
    margin-left: 10rem;
    margin-bottom: -16rem;
   

    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
      max-width: 100%;
      margin-left: 15rem;
      width:70%;
    }
 
  }



 
 
  }


`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" outline/>
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text="+49 176 21943692"
              heading="social Links"
              link='tel:+49 176 21943692'
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="lara.mz.kamper@gmail.com"
              link='mailto:lara.mz.kamper@gmail.com'
            />
            <ContactInfoItem text="Krefeld , Germany"
            link='https://www.google.com/maps/place/Adlerstra%C3%9Fe+21,+47798+Krefeld/@51.3242416,6.5522381,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8affb9c64db6b:0x2f0993c69365b103!8m2!3d51.3242383!4d6.5544268'/>
          </div>
          <div className="right">
            <Map />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
