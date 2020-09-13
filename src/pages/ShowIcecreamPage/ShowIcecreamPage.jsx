import React from 'react';
import { Link } from 'react-router-dom';
import './ShowIcecreamPage.css';

const ShowIcecreamPage = ({ icecreamData, user }, props) => {
  return (
    <div>
      <h2 className="Bar"><Link className="Home-Contact" to='/'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="Home-Contact" to='/icecream'>Return</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="Home-Contact" to='/aboutus'>About Us</Link></h2>
      <h1>{icecreamData.location}</h1>
      <img alt="icecream" className="Show" src={icecreamData.image_url}></img>
      <br/>
      <h2>Name: </h2><h3>{icecreamData.name}</h3>
      <span></span>
      <h2>Price: <br />${icecreamData.price}</h2>
      <span></span>
      <h2>Review: </h2><h3>{icecreamData.description}</h3>
      <br/>
    </div>
  )
};

export default ShowIcecreamPage;