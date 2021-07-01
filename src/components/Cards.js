import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import bit_bg from './images/bit_bg.png';
import lang_bg from './images/lang_bg.jpg';
import mov_bg from './images/mov_bg.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1 id='sec2head'>Completed Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={bit_bg}
              text='BitCoin Price Generator'
              label='1'
              path='/apia'
              text_para= {
             
				              <p id="sec2body"><br></br> This is a simple API project that makes for RESTFUL APIs.
It makes use of Coin Desk API and provides the realtime value of the Bitcoin in the world currency of choice.
                   </p>
              }
            />     
              <CardItem
              src={lang_bg}
              text='Language Translator'
              label='2'
              path='/under'
              text_para= {
             
				              <p id="sec2body"><br></br> Uses the <b>GOOGLE API</b> to translate one language into any other language
                   </p>
              }
            />     
              <CardItem
              src={mov_bg}
              text='Combined API Movie Browser'
              label='3'
              path='/under'
              text_para= {
             
				              <p id="sec2body"><br></br> This a compiled API of various streaming services like Netflix, Amazon, Hulu etc. On entering a movie or series it provides a comprehensive list of all the platforms where you may stream it.
                   </p>
              }
            />     
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

