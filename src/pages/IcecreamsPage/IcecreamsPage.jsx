import React from 'react';
import { Link } from 'react-router-dom';
import './IcecreamsPage.css';
import './../ShowIcecreamPage/ShowIcecreamPage';

const IcecreamsPage = ({ icecreams }, props) => {
  return (
    <div>
      <h2 className="Bar"><Link className="Home-Contact" to='/'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="New" to='/icecreams/new'>New Icecream</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link className="Home-Contact" to='/aboutus'>About Us</Link></h2>
      <h1>Ice Cream Reviews</h1>
      <div>
          { icecreams.map((icecream, idx) => <div key={idx}><Link className="Name" to={`/icecream/${idx}`}><img alt="icecream" className="Img" src={icecream.image_url}></img><h3 className="Font">{icecream.name}</h3></Link></div>) }
      </div>
      <iframe title="Candy" className="Shop" src="https://www.youtube.com/embed/mBXNglp84lI?autoplay=1"></iframe>
    </div>
  )
};

export default IcecreamsPage;