import React from 'react';
import {Link} from 'react-router-dom';
import './ContactUsPage.css';

const ContactUsPage = (props) => {
  return (
    <div className='ContactUs'>
        <div className='Home'>
        <p className="Return"><Link className="Home-Contact" to='/icecream'>Return</Link></p>
        </div>
        <h1>About Us</h1>
        <h3>Take Me To The Ice Cream Shop is an ice cream photo-sharing application<br></br>and service that allows users to share reviews of ice cream publicly.</h3>
        <h1>Contact Us</h1>
        <h3>Phone Number: (555)555-5555</h3>
        <h3>Email: icecreamshop@email.com</h3>
        <h1>Headquarters: </h1>
        <iframe title="Griffith" className="Map" src="https://www.google.com/maps/embed/v1/place?q=griffith%20observatory&key=AIzaSyDSWlBvSZjPkSTzIPHE8I59wwy_yEhy_rc" allowFullScreen></iframe>
    </div>
  );
};

export default ContactUsPage;