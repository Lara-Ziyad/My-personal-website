import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 1500rem;
  margin: 0 auto;
  font-size: 2.2rem;

  font-family: 'DosisLight';
  color: white;

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    max-width: 800px;
  }
  .row{max-width: 700px;

  }

  @media only screen and (max-width: 768px) {
    
    font-size: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <div className='row'>
      <div className='col'>{children}</div>
      </div>
    </PStyle>
  );
}
