import React from 'react';
import styled from 'styled-components';
// import Swiper from 'react-id-swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  background-image: linear-gradient(to bottom left,var(--text-blue), var(--deep-terc));

padding: 15rem 0;
  .projects__allItems {
    display: flex;
   
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 4rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
  
    z-index: 10;
    right: 96%;
    left: auto;
    top: 30%;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
    /* .swiper-button-prev, */
  /* .swiper-button-next { right: 0%;}
  }*/
  .swiper-button-prev{right: 90%;} 
`;










export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="Some of my recent works" heading="Projects" />
        <div className="projects__allItems">


          
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1000: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    buttom={''}
                  />
                </SwiperSlide>
                
              );
            })}
          </Swiper>

         
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
