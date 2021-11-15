import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  /* text-align: ${(props) => (props.outline ? 'start' : 'center')}; */
  margin-left: ${(props) => (props.outline ? '-8rem' : null)};
  padding-top: ${(props) => (props.outline ? '4rem' : null)};
  background-color: ${(props) => (props.outline ? '' : '')};
  /* margin:0px; */
  /* width: 150%;
padding-bottom:2rem; */
 width:${(props) => (props.outline ? '900px;' : null)};

 
 display: flex;
  flex-direction: column;
 
  align-items: center;
 
  p {
    font-family: 'DosisSemiBold';
    font-size: 2.8rem;
    color:  ${(props) => (props.outline ? 'var(--terc)' : 'var(--offwhite)')};
    
  }
  h2 {
    font-family: 'DosisBold ';
    font-size: 3.5rem;
    /* margin-left:${(props) => (props.outline ? '3rem' : '3rem')}; */
   padding-top: 1rem;
    /* margin-bottom: 1rem; */
    text-transform: uppercase;
    /* color: #fff; */
    color:  ${(props) => (props.outline? 'var(--terc)' : 'var(--offwhite)')};
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    /* background-color:transparent; */
   
    p {
      font-size: 2rem;
    }
    h2 {
      font-size: 3.6rem;
      /* margin-left:0rem; */
    }
  }
`;

export default function SectionTitle({
  subheading = 'test',
  heading = 'test',
  outline = false,
}) {
  return (
    <SectionTitleStyle className="section-title"  outline={outline} >
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
