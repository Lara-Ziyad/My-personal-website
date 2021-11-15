import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Cards from '../components/Cards';
import Ebackground from '../assets/images/bGround/Ebackground.png';
import jsPDF from 'jspdf';
import Lara from '../assets/images/Lara.jpg';
import DocItem from '../components/DocumentsItem';
import { MdDownload,} from 'react-icons/md';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';
import {FaProjectDiagram} from 'react-icons/fa';

const AboutPageStyles = styled.div`
  padding: 13rem 0rem 0rem 0rem;
  margin: 0 auto;
max-width: 100%;
overflow: hidden;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    

.container {
  max-width: 50%;
  width: 50%;
  padding:5rem 0rem 0rem 0rem;

  
}
  .top-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
 
    width:100%
    
  }

  .right {
   

    display:flex;
      flex-direction:row;
      padding:3rem 0;
     
   
  }
  .about__subheading {
   
    font-size: 2rem;
    margin-bottom: 2rem;
    
    color: var(--text-blue);
    span {
      background-image: linear-gradient(to bottom left,var(--terc), var(--text-blue));
      padding: .1rem 1rem 0.4rem 1rem;
      font-size: 3rem;
      border-radius: 4px;
      color: var(--offwhite);
      margin-left: 2rem;
      font-family: 'DosisSemiBold'
    }
  }
 
  .about__info {
   
    margin-bottom: 1rem;
    color: var(--text-blue);
    font-size: 2rem;
    
    .para {
      max-width: 100%;
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
  .about__info__items {
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
 
  }
  .about__info__item {
   
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
   width: 100vw;
   height: 50rem;
   padding:2rem 0rem 5rem 0rem;
  
   
 }
  .about__info__item1 {
   background-image: url(${Ebackground});
    background-color: var(--terc);
    /* margin-left: 150%; */
    padding-top: 5rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-bottom:10rem;
    height:600px
    
  }

  .about__info__item2 {
   
    background-image: linear-gradient(to bottom left,var(--dark-orange), var(--orange));
   padding-top: 15rem;
   padding-bottom:10rem;
   height:700px
    
   

   
 }

 .about__info__item3 {
   
   background-color: var(--purple);
     padding-top: 5rem;
    
     padding-bottom:10rem;
     height:600px
   
 }
  .about__info__heading {
    font-size: 3rem;
    text-transform: uppercase;
   
    border-radius: 4px;
    color: var(--offWhite);
    padding: .5rem 1rem .5rem 7rem;
    color: #fff;
    font-family: 'DosisSemiBold';
    margin-left:28rem;
    
  }
  /////////////////////////////////////////////////////////////////////////////////
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
      margin-left:25rem;
      margin-bottom: 5rem;
    }

 /////////////////////////////////////////////////////////////////////////////////

    .about__info__item {
 
   /* margin-left: -rem; */
   width: 150vw;
   height: 90vh;
   padding:2rem 0rem 2rem 18rem;
 
 }}


 /////////////////////////////////////////////////////////////////////////////////

 @media only screen and (max-width: 550px) {

  .about__info__heading {
      
      margin-left:0rem;
     
    }


  .about__info__item {
 
 margin-left: -8rem;
 width: 120vw;
 height: 120vh;
 padding:2rem 0rem 2rem 3rem;

}}


  
`;
/////////////////////////////////////

export default function About() {
  const createPdf = () => {
    const doc = new jsPDF('portrait', 'px', 'a6', 'false');
    doc.addImage(Lara, 'jpg', 0, 0, 210, 297);
    doc.save('Lara-Kamper-Resume.pdf')

      }
   
  
  
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
              <br /> <br />
                Hi, I am <span>Lara Kamper</span>
              </p>
             
              <div className="about__info">
              <br />
                <p>A Palestinian Web Developer, Designer, and Architect based in Germany since 2017. My evident passion for creating and designing stuff with a unique point of view has been prominent since my early childhood. <br/>After years of working as an Architect, Artist, and Graphic Designer, in 2021, I decided to learn Web Development while I found out coding is a fantastic combination of creating and design; it is a kind of art.  I love it while I have the opportunity to develop along with the design, and I enjoy the process a lot.
                  <br /> <br />
                  I specialized in JavaScript technologies across the MERN stack (MongoDB, Express, React, Node.js), besides a solid background in design technology, including frameworks and libraries such as React Native,  jQuery, material UI, Bootstrap, and outstanding knowledge in using Css3, HTML5, Sass, in addition Adobe Creative Cloud (Photoshop, Illustrator, Indesign, After Effect).
                  <br />
                  <br />
                </p>
              </div>
            </div>

         
            



        <div className="right">       
          <div onClick={createPdf}> 
                <DocItem
                  icon={<MdDownload/>}
                  title=" CV"
          
               />
              </div>
             
              <DocItem
            
                icon={<FaProjectDiagram/>}
                title="Projects"
                link="../Projects"
               />
           
              
               <DocItem   
                icon={<RiLinkedinFill />}
                link="https://www.linkedin.com/in/lara-kamper-752b03215/"
            // title="LinkedIn"
               />
               <DocItem
            icon={<FiGithub/>}
            link = "https://github.com/Lara-Ziyad"
               />
        </div>
                
            






          </div>
          <div className="about__info__items">
            <div className="about__info__item  about__info__item1">
              <span className="about__info__heading">Education</span>

              <AboutInfoItem
                title="Fullstack Web Development"
                items={[
                  'DCI Digital Career Institute',

                  'Aug 2020 — Jul 2021',
                  ' Berlin',
                ]}
              />
              <AboutInfoItem
                title="Bachelor in Contemporary Art"
                items={[
                  'International Academy of Arts',
                  'Aug 2014 — Jan 2017',
                  'Ramallah',
                ]}
              />
              <AboutInfoItem
                title="Bachelor in Architecture"
                items={[
                  'Birzeit University',

                  'Sep 1999 — June 2006',
                  'Ramallah',
                ]}
              />
            </div>
            {/* <span className="about__info__heading .headingSkills ">My Skills</span> */}
           
            <div className="about__info__item about__info__item2">
              <span className="about__info__heading">My Skills</span>
     <Cards />
            </div> 
            
            <div className="about__info__item about__info__item3">
              <span className="about__info__heading">Experiences</span>

              <AboutInfoItem
                title="Junior Full stack developer"
                items={['DCI Digital Career Institute ', 'July 2021- Sep 2021', 'Düsseldorf']}
              />
              <AboutInfoItem
                title="Artist"
                items={['Freelancer', 'June 2014- July 2021 ', 'Ramallah , Barlin']}
              />
              <AboutInfoItem
                title="Graphic Designer"
                items={['Freelancer', 'June 2014- July 2020', 'Ramallah , Barlin']}
              />
               <AboutInfoItem
                title='Architect'
                items={['Riwaq Centre , Civil Defence ','Aug 2006- May 2014' , 'Ramallah']}
              />
            </div>
          </div>
        </div>
       
      </AboutPageStyles>
      <ContactBanner />
    </>
  );
}
