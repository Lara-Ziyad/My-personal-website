import React from 'react';

import styled from 'styled-components';
import HeroImg from '../assets/images/newone.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';





const HeroStyles = styled.div`
  .hero {
    height: 780px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
  }
  
  .container {
    height: 500px;
  
    width: 100%;
 
    
  }
  .start {
    height: 500px;

    position: relative;

  }
  .hero__heading {
    margin-top: 8rem;
    margin-right: 58rem;
  
    margin-bottom: 1rem;
     position: absolute;
     top:2rem; 
    left: -25%;
    width: 100%;
    color: var(--text-blue);
    span {
      display: inline-block;
      width: 100%;
    
      
    }}
    .hello{font-size: 2.6rem;
   }
    .hero__name {
      font-family: 'DosisBold ';
      font-size:6rem;
      color: var(--offwhite);
      position: absolute;
    left: 25rem;
    top: -100%;
    }
  } 
   .aboutSection__button {
    display: flex;
    
    position: absolute;
    left: 23%;
    bottom: 8%;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-align-content: start; */
   }


.resize{

  height: 550px;
  width:auto
}
 
  .hero__img {
    width: 30%;
    height:90%;
    margin: 0 auto;
    position: absolute;
    left: 49%;
    top: 35%;
    z-index: -1;
    opacity: 0.8;
  } 

  .hero__info {
    border: 2px hidden var(--red);
    width: 40%;
    font-size: 2.6rem;
    word-spacing: 1.2rem;
    text-align: start;
    display: flex;
    flex-direction: column;;
    position: absolute;
    left: 20%;
    top: 38.5%;
    color: var(--text-blue);
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;


  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-90px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color: var(--text-blue);
    }
    img {
      position: relative;
      top: -15px;
      max-height: 50px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }


  
  }
  @media only screen and (max-width: 900px) {
    .hero {
      min-height: 600px;
      width: 100%;
      margin: 0 auto;
      height: 100%;
      padding: 0;
      
    }
    .hero__img {
    width: 60%;
    height:70%;
    position: absolute;
    left: 40%;
    top: 40%;
    
  } 
    .start {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-align-content: center;
      margin-left: 25rem;
      width: 40%;
    }
    .aboutSection__button{
      width: 300%;
      position: absolute;
      left: -30%;
      bottom: -5%;
      display: flex;
    align-items: flex-start;
    justify-content: start;
    
      
    }
    .hero__heading {
    margin-top: 5rem;
    margin-right: 58rem;

    margin-bottom: 1rem;
     position: absolute;
     top: 1.9rem; 
    left: -20rem; 
    width: 100%;
    span {
      display: inline-block;
      width: 100%;
      
    }}
    .hero__name {
     
      position: absolute;
    left: 25rem;
    top: -45%;
    }
 
  
  .hero__info {
   
    width: 100%;
    position: absolute;
    left: -30%;
    top: 30%;
   
  }

    @media only screen and (max-width: 780px) {
      .hero__heading {
   
     position: absolute;
     top: 0rem; 
    left: -20rem; 
    width: 100%;
    span {
      display: inline-block;
      width: 100%;
      
    }}
    .hero__name {
      
      font-size:4rem;
     
    left: 20rem;
    top: -1.5rem;
    }

    .hero__info {
   
   width: 130%;
   position: absolute;
   left: -18rem;
   top: 12rem;
  
 }
 .aboutSection__button{
      width: 300%;
      position: absolute;
     
      left: -18rem;
      bottom: -5%;
      display: flex;
    align-items: flex-start;
    justify-content: start;
    
      
    }

    @media only screen and (max-width: 490px) {
      .hero__heading {
        font-size:2rem;
     position: absolute;
     top: 0rem; 
    left: -20rem; 
    width: 100%;
    span {
      display: inline-block;
      width: 100%;
      
    }}
    .hero__name {
      
      font-size:2.5rem;
     
    left: 18rem;
    top: -0.5rem;
    }

    .hero__info {
      font-size:1.7rem;
   width: 130%;
   position: absolute;
   left: -18rem;
   top: 12rem;
  
 }
 .aboutSection__button{
      width: 200%;
      position: absolute;
     
      left: -18rem;
      bottom: -5%;
      display: flex;
    align-items: flex-start;
    justify-content: start;
    
      
    }
    .hero__img {
    width: 60%;
    height:50%;
   
    
    position: absolute;
    left: 0%;
    top: 40%;
    
  } 
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div
          className="container"
          // style={{
          //   backgroundImage: `url(${HeroImg})`,
          //   backgroundRepeat: 'no-repeat',
          // }}
        >
          <div className="start">
            <h1 className="hero__heading">
              <span className="hello">Hello, This is</span>
              <span className="hero__name">Lara Kamper</span>
            </h1>
           
            <div>
              <p className="hero__info">
              A passionate Web Developer and Designer developing thoughtfully elegant solutions to interesting problems to build state of the art, user-friendly websites <br/> &  applications.
              </p>
              <div className="aboutSection__button">
                <Button  btnText="See my Project" btnLink="/projects" outline />
                <Button btnText="Get to know me" btnLink="/about" />
              </div>
            </div>
          </div>
           <div className="hero__img">
              <img className="resize"src={HeroImg} alt="" />
            </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Scroll</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
