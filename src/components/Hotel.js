import React from 'react';

const Hotel = (props) => {
  // eslint-disable-next-line  object-curly-newline
  const { name, image, country, address } = props;

  return (
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
        <div className="location">
          <p>{country}</p>
          <p>{address}</p>
        </div>
      </div>
      <div className="icons">
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
  );
};

export default Hotel;