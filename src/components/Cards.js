

import React from 'react';
import FrontendImg from '../assets/images/cards/FrontEnd.gif';
import BackendImg from '../assets/images/cards/bEnd.gif';
import DesignImg from '../assets/images/cards/Design.gif';


import '../App.css';


function Cards(props) {


    return (
      <  div class='contain'>
       
        
        <div className="cards">
    <div class="wrapper"> 
      <div class="card front-face">
              <img src={FrontendImg} alt="Front-End" />
              <h2>Front End</h2>
      </div>
      <div class="card back-face"> 
        <div class="info">
          <div class="title">HTML<br/>CSS <br/>JavaScript <br/>jQuery <br/>React<br/>Redux</div>
         
        </div>
          </div> </div>
        
        
        <div class="wrapper">
        <div class="card  front-face">
        
              <img src={BackendImg} alt="Front-End" />
                <h2>Back End</h2>
      </div>
      <div class="card back-face"> 
        <div class="info">
          <div class="title">Node<br/>Express<br/>MongoDB</div>
        
        </div>
        </div>
        </div>

        <div class="wrapper">
        <div class="card  front-face">
              <img src={DesignImg} alt="Front-End" />
              <h2>Design</h2>
      </div>
      <div class="card back-face"> 
        <div class="info">
          <div class="title">Figma<br/>Illustrator<br/>Photoshop <br/>Indesign<br/>After Effect<br/>Redux</div>
          
        </div>
        </div></div>
        </div>
      

   
        
    
           </div> 
      
    );
}

export default Cards;