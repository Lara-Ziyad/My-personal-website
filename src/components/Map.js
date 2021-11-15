import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  max-height: 100%;
  width: 100%;
  border-radius: 2rem;
  .container {
    position: relative;
    min-height: 480px;
  }
  .map__card {
    position: absolute;
    right: 18%;
    bottom: 8%;
    padding: 1.5rem;
    background: var(--terc);
    width: 100%;
    max-width: 50%;
    /* height:px; */
    border-radius: 5px;
  }
   a{
     color:var(--offwhite);
     text-decoration: none;
}
h2{
  color:var(--darkoffwhite);
 
}

  .map__card__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: .3rem;
 
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    padding:5rem;
    max-height: 150%;
  width: 70%;
  .map__card {
      max-width: 15rem;
      right: auto;
    margin-bottom:4.3rem;
    margin-left:4.3rem;
    }
    .container {
   
    min-height: 360px;
  }
  
  }
  @media only screen and (max-width: 400px) {
    max-height: 100%;
  display:none;
    .map__card {
      max-width: none;
      right: auto;
    
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h2 className="map__card__heading">Here is me</h2>
          <PText> <br/> Krefeld <br/> Germany</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Adlerstra%C3%9Fe+21,+47798+Krefeld/@51.3242416,6.5522381,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8affb9c64db6b:0x2f0993c69365b103!8m2!3d51.3242383!4d6.5544268"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
