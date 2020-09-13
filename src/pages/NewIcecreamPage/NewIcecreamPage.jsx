import React from 'react';
import { Link } from 'react-router-dom';
import './NewIcecreamPage.css'

const NewIcecreamPage = ({ onNameChange, onPriceChange, onDescriptionChange, onImage_urlChange, onLocationChange, name, description, price, image_url, location, createIcecream }) => (
    <div>
    <Link className="Link" to="/icecream">Return</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link className="Link" to="/aboutus">About Us</Link>
    <h1>New Ice Cream</h1>
    
    <span></span>

    <form onSubmit={createIcecream}>

        <h4>Name: </h4>
        <input type="text" placeholder="name" value={name} onChange={onNameChange} />

        <br/>

        <h4>Price: </h4>
        <input type="number" value={price} onChange={onPriceChange} />

        <br/>

        <h4>Review: </h4>
        <textarea placeholder="Enter description here ..." value={description} onChange={onDescriptionChange} />

        <br/>

        <h4>Image URL: </h4>
        <input type="url" placeholder="image url" value={image_url} onChange={onImage_urlChange} />

        <br/>

         <h4>Where You Got Ice Cream From: </h4>
        <input type="text" placeholder="Enter place here ..." value={location} onChange={onLocationChange} />

        <br/>
        <br/>

        <input type="submit" value="New Icecream" />

    </form>
    </div>
);


export default NewIcecreamPage;