import React from 'react';
import {Link} from 'react-router-dom';
import './IntroPage.css';

const IntroPage = (props) => {
  return (
      <div className='IntroPage'>
        <h2 className="Menu"><Link className="Menu2" to='/icecream'>Explore</Link></h2>
        <img alt="icecream" src="https://i.imgur.com/jKkfqXc.png"></img>
      </div>
  )
};

export default IntroPage;