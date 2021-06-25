import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import game from './images/games.jpg';
import game1_eoz from './images/game1_eoz.png';
import game2_bt from './images/game2_bt.png';
import backend from './images/backend.jpg';
import webdev from './images/webdev.jpg';
import ml from './images/ml.jpg';
import fs from './images/fullstack.jpg';
import other from './images/other_icon.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Completed Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={game}
              text='Games'
              label='Games'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                            EYE OF THE ZODIAC 
                            <br></br>
                            <a href="#" > Click here to know more/play it</a>
                      </h2>
				              <p id="sec2body"><br></br> This ASCII Rougelike Game game was developed in collaboration with Yashwardhan Kumar (HKU CS Student).
This is a text based adventure game. Incorporates the elements of classic roguelike games. Players have to navigate through a maze-like dungeon while fighting enemies in order to escape.
                     </p>
                     <img src={ game1_eoz } width="280" height="190"/>
                   </li>
                   <br></br>	
                  <li>
		            		<h2 id="sec2head">
                    Big Two - Card Game
                    <br></br>
                            <a href="#" > Click here to know more/play it</a>
                    </h2>
			            	<p id="sec2body"><br></br> This is a multi-player implementation of the popular card game big two. <br></br><br></br>
                   </p>
                   <img src={game2_bt} width="280" height="190"/>
                  </li>
              </ul>  
              }
            />
              
            <CardItem
              src={webdev}
              text='Web Development Projects'
              label='Web Development Projects'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                            Vera: Website
                            <br></br>
                            <a href="#" > Click here to access</a>
                      </h2>
				              <p id="sec2body"><br></br> I created this website single handedly for a project I am working on. 
                        Vera is an AI speech therapist that makes use of Machine Learning and Natural Language Processing to provide accurate and cost effective therapy
                     </p>
                     <img src={game1_eoz} width="280" height="190"/>
                   </li>
                   <br></br>	
              </ul>  
              }
            />
            <CardItem
              src={backend}
              text='Backend Projects'
              label='Backend Projects'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                      Realtime API Generator: Restful API
                            <br></br>
                            <a href="#" > Click here to access</a>
                      </h2>
				              <p id="sec2body"><br></br> This is a simple API project that makes for RESTFUL APIs.
It makes use of Coin Desk API and provides the realtime value of the Bitcoin in the world currency of choice.
                     </p>
                     <img src={game1_eoz} width="280" height="190"/>
                   </li>
                   <br></br>	
              </ul>  
              }
            />     
          </ul>
        </div>
      </div>
      <h1>Underprogress Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ml}
              text='Machine Learning'
              label='Machine Learning'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                        Vera
                            <br></br>
                      </h2>
				              <p id="sec2body"><br></br> I am very excited to work on Vera as it an extremely challenging project but I has been an amazing learning experience for me. We intend to have a prototype out soon. Hopefully, we it will be what we envision it to be.
                     </p>
                   </li>
                   <br></br>	
              </ul>  
              }
            />
            <CardItem
              src={fs}
              text='Full-Stack Web Dev'
              label='Full-Stack Web Dev'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                      Educational Platform
                            <br></br>
                      </h2>
				              <p id="sec2body"><br></br> For the summer of 2021, I will be interning at FinTech firm that intends to launch their Educational Platform. 
I am responsible for creating the frontend and backend platforms
                     </p>
                   </li>
                   <br></br>	
              </ul>  
              }
            />
            <p>

            </p>
            <CardItem
              src={other}
              text='Other Projects'
              label='Other Projects'
              path='/services'
              text_para= {
                <ul class="timeline">
                    <li>
	              			<h2 id="sec2head">
                      Educational Platform
                      </h2>
                   </li>
                   <br></br>
                   <li>
	              			<h2 id="sec2head">                
                      Educational Platform
                      </h2>
                   </li>
                   <br></br>
                   <li>
	              			<h2 id="sec2head">
                      Educational Platform
                      </h2>
                   </li>
              </ul>  
              } 
            />     
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
