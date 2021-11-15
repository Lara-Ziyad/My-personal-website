import React, { useState }  from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .projectItem__img {
    width: 100%;
    width: 280px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
  
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem ;
    background-image: linear-gradient(to bottom left,  var(--dark-orange) 20%, var(--orange) 80%);
    padding: 0rem 1rem 2.5rem 1.5rem;
    border-radius: 12px;
    width: 280px;
    color: var(--offwhite);
    display:flex;
    flex-direction:column;
    align-items:center;
    
   
  }
  .projectItem__title {
    font-size: 2.8rem;
    color: var(--offwhite);
    padding-top:1rem;
 
  }
  div > a{
    color: var(--darkoffwhite);
    font-size: 2rem;

   padding-top: .5rem;

    cursor:pointer;
    
  }
  .projectItem__desc {
    font-size: 1.8rem;
    font-family: 'DosisRegular';
    margin-top: 1rem;
    padding-bottom: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    div > a{
    
   /* margin-left: 20rem; */
    
  }
    .projectItem__img {
      height: 350px;
    }
    /* .projectItem__info {width: 400px;} */
  }
`;

export default function ProjectItem({
  link = 'Project Link',
  img = '',
  title = 'Project Name',
  buttom = 'Click to see more',
  click = () => { },
  project="Go to my projects page"
})

{

  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>

      {/* <div onClick={openModal} > */}
      <div className="projectItem__info" >
       
          <h3 className="projectItem__title">{title}</h3>
       {/* <p className="projectItem__desc">{desc}</p> */}
      <div onClick={click}>
            <a > 
       
        { buttom}
          </a>
          < a href={"../Projects"}> {project}</a>
         </div>
      {/* <button onClick={click}>I'm a modal</button> */}
        
       
      </div>
    {/* </div> */}
      



    </ProjectItemStyles>
  );
}
