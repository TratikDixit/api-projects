import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get in touch! 
        </p>
        <p className='footer-subscription-text'>
          Write to me <a id="link" href="mailto:tratik@connect.hku.hk"> here! </a> 
        </p>
     
      </section>
     
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Tratik
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Tratik Dixit © 2021</small>
          <div class='social-icons'>
            <a class='social-icon-link email' href='mailto:tratik@connect.hku.hk'>
              <i class="fa fa-envelope-open"></i>
            </a>
            <a class='social-icon-link github' href='https://github.com/TratikDixit'>
            <i class="fab fa-github" ></i>
            </a>  
            <a class='social-icon-link linkedin' href='https://www.linkedin.com/in/tratikdixit/'>
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
