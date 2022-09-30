import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { deleteHotel } from '../redux/actions/hotels';

const Hotel = (props) => {
  // eslint-disable-next-line  object-curly-newline
  const { name, image, country, address, id } = props;
  return (
    <NavLink className="navs" to={`/hotels/${id}`}>
      <div className="hotel">
        <div className="img-div">
          <div className="background" />
          <img src={image} alt="hotel-img" className="hotel-img" />
        </div>
        <div className="detail-div">
          <h2 className="hotel-name">{name}</h2>
          <div className="rating">
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
          </div>
          <div className="hotel-location">
            <p>{country}</p>
            <p>{address}</p>
          </div>
        </div>
        <div className="icons-card">
          <div>
            <i className="uil uil-facebook-f" />
          </div>
          <div>
            <i className="uil uil-twitter" />
          </div>
          <div>
            <i className="uil uil-instagram-alt" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Hotel;
