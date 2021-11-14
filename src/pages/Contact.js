import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';
import styled from 'styled-components';


const ContactStyle = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding:0;
margin:0;


`;

export default function Contact() {
  return (
    <ContactStyle>
      <ContactSection />
    </ContactStyle>
  );
}
