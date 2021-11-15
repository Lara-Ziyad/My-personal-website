import React from 'react';
import styled from 'styled-components';
// import Button from './Button';
import { Link } from 'react-router-dom';
import PText from './PText';
import BannerImg from '../assets/images/bGround/contact.png'
const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
    background-size: cover;
    display: flex;
  flex-direction: column;

  align-items: center;
  
  .contactBanner__wrapper {
   
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
    color: var(--offwhite);
    p{
      font-family: 'DosisSemiBold';
    font-size:2.2rem;}
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: var(--darkblue);
  }

  .button-wrapper {

    font-size: 2rem;
    background-color: var(--terc);
    padding: 0.2em 1em;
    border: 1px solid var(--terc);
    border-radius: 8px;
    display: inline-block;
   
  
  }
  .button{ color: var(--offwhite);}
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
      
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <p >Have a project in mind</p>
          <h3 className="contactBanner__heading">Let me help you</h3>
        
          <button type="button" className="button-wrapper">
      <Link className="button" to="/contact">
      Contact Now
      </Link>
    </button>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
