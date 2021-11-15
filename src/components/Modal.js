import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';

import ph1 from '../assets/images/projects/emoji/1.png';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
`;

const ModalWrapper = styled.div`
  width: 1000px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  /* color: #000; */
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  position: relative;
  
  border-radius: 10px;
  background-image: linear-gradient(to bottom left,var(--dark-bg), var(--dark-bg2));
`;

const ModalImg = styled.img`
 display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
  object-fit: contain;
 margin-left:2.1rem;
  border-radius: 10px 0px 0px 10px;
  /* background-image: linear-gradient(to bottom left,var(--dark-bg), var(--dark-bg2)); */
  padding:0px;
`;

const ModalContent = styled.div`

overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* line-height: 1.5; */
  color: var(--text-blue);
  padding: 5rem 5rem 5rem 3rem;
    /* padding: 20px; */
    /* background-image: linear-gradient(to bottom left,var(--dark-bg2), var(--dark-bg)); */
    border-radius: 0px 0px 10px 10px;
h1{
    font-size: 2.5rem;
    /* font-family:'DosisBold '; */
    color: var(--offwhite);
    margin-bottom: 1rem;
   
}
h2{
    font-size: 2rem;
    /* font-family:'DosisBold '; */
    color: var(--offwhite);
    
    margin: 1rem 0rem 1rem 0rem;
}
  p {
      font-size:2rem;
    margin-bottom: 1rem;
   
  }
  .icon{
    display: flex;
    flex-direction:column;
    /* margin-left:60%; */
    align-items: flex-end;
    color: var(--orange);
font-size: 1.5rem;

  }
  svg {

    width: 5rem;
    color: var(--orange);
    margin-bottom: -1.1rem
    
  }


`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #fff;
`;

export default function Modal({ showModal, setShowModal,
icon = <FiGithub />,
modalImg= ph1,
title = 'Project Name',
  desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nam, necessitatibus numquam, tempore voluptate facilis minima est iste soluta ex ipsum impedit vero suscipit veniam mollitia. . ',
  github = "",
  tech=""
    
    })
{
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200
    },
    opacity: showModal ? 1: 0,
    transform: showModal ? `translateY(-10%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={modalImg} alt='lara' />
              <ModalContent>
                <h1>{title}</h1>
                <p>{desc}  </p>

                <h2>Tech Used:</h2>
                <p>{tech}  </p>
                       
                
                
                <div className="icon">
                              <a href={github} target="_blank" rel="noopener noreferrer">
                                  {icon}                                  
                              </a>Codes
                       </div>
                          
              </ModalContent>
                          <CloseModalButton
                              
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
