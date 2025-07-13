import React from 'react';
import aboutPhoto from './about.jpg';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='about' style={{backgroundColor: 'rgb(30 30 30)', padding: '50px 0px'}}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-12 col-lg-5">
              <div className="left">
                <img style={{borderRadius: '5px'}} src={aboutPhoto} className='img-fluid' alt='About Us' />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="right">
                <div className="content">
                  <h2 style={{color: 'white', paddingTop: '5px'}}>About Us</h2>
                  <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat aliquid dignissimos iusto fugit adipisci, dolores alias et ea dolorum temporibus. Perspiciatis, a cumque quia vitae officiis tempore obcaecati odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat aliquid dignissimos iusto fugit adipisci, dolores alias et ea dolorum temporibus. Perspiciatis, a cumque quia vitae officiis tempore obcaecati odit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
