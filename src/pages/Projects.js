import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import  Modal  from '../components/Modal';

const ProjectStyle = styled.div`
 
  background-color: var(--purple);
  z-index: -1 !important;

 padding: 10rem 0;
 .container
 {width:50%;}

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5.1rem;
    margin-top: 5rem;
  }
  .projects__searchBar {

  margin-top: 5rem;
    cursor: pointer;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  color: rgb(255, 254, 253);
  /* z-index: 1; */
 

  font-weight: 500;
  line-height: 2.5em;

  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  }
  form{display : flex;
  align-items: center;
}
  .projects__searchBar input {
    background: none;
    width: 96%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--orange);
    border-radius: 6px;
    outline: none;
    border: none;
  
  }
  .projects__searchBar input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--offwhite);
  opacity: .5; /* Firefox */

 
}
  .projects__searchBar .searchIcon {
 
    width: 2rem;
   
    opacity: .7;
    right: 1rem;
    z-index: 1;
  }
  .projects__searchBar .searchIcon path {
    color: var(--terc);
  }

    @media only screen and (max-width: 768px) {
      .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 50%;
    }

  }
`;

export default function Projects() {
  
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const openModal = (id) => {
   setShowModal(prev => !prev);
   let [data]= projectsData.filter((item) => item.id === id );
    setModalData(data)
  };
  return (
    <>
      <ProjectStyle>
      <div>
          <Modal showModal={showModal} setShowModal={setShowModal}
           key={modalData.id}
           title={modalData.name}
            desc={modalData.desc}
            tech={modalData.tech}
           img={modalData.img}
            github={modalData.github}
            modalImg={modalData.modalImg}
          />
          </div>
        <div className="container">
      
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects__searchBar">
           <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
         
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
                project={''}
                github={item.github}
                click ={()=> openModal (item.id)}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
